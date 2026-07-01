let currentQuestion = null;
let doneCount = 0;
let correctCount = 0;
let wrongCount = 0;
let remainingQuestions = [];
const REQUIRED_QUESTIONS_FOR_GAME = 30;

let breakTimer = null;
let breakSeconds = 600;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const modeText = document.getElementById("modeText");
const timerText = document.getElementById("timerText");

let gameTimer = null;
let gameMode = "";
let isGameOver = false;

let snake = [];
let dx = 20;
let dy = 0;
let foodX = 200;
let foodY = 200;
let score = 0;

let enemies = [];
let corpseFoods = [];

function initQuestions() {
    if (typeof questions === "undefined" || questions.length === 0) {
        alert("題庫沒有載入，請確認 questionBank.js 在同一個資料夾。");
        return false;
    }

    remainingQuestions = [...questions];
    return true;
}

function randomQuestion() {
    if (remainingQuestions.length === 0 && !initQuestions()) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions[randomIndex];
    remainingQuestions.splice(randomIndex, 1);

    document.getElementById("questionTitle").innerText =
        `Question ${currentQuestion.id} - ${currentQuestion.topic}`;
    document.getElementById("questionText").innerHTML = formatQuestionHtml(currentQuestion.question);

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    for (const option of currentQuestion.options) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = option;

        label.appendChild(radio);
        label.append(` ${formatInlineText(option)}`);
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(document.createElement("br"));
    }

    document.getElementById("result").innerHTML = "";
    updateStats();
}

function formatQuestionHtml(text) {
    return formatQuestionText(text)
        .split("\n")
        .filter(line => line.trim() !== "")
        .map(line => `<p>${escapeHtml(line)}</p>`)
        .join("");
}

function formatQuestionText(text) {
    let formatted = formatInlineText(text);

    formatted = formatted.replace(
        /with density function 1\s*[−-]\s*\(\s*\/\s*1000\s*\)\s*x\s*,\s*x\s*>\s*0\.\s*f\s*\(\s*\)\s*x\s*=\s*e\s*1000/i,
        "with density function f(x) = (1/1000)e^(-x/1000), x > 0."
    );

    formatted = formatted
        .replace(/\s+(\([ivxlcdm]+\))/gi, "\n$1")
        .replace(/\s+((?:calculate|determine|assume)\b)/gi, "\n$1")
        .replace(/\n{2,}/g, "\n");

    return formatted.trim();
}

function formatInlineText(text) {
    return String(text)
        .replace(/[\uE000-\uF8FF]/g, "’")
        .replace(/\s+/g, " ")
        .replace(/\s+([,.;:])/g, "$1")
        .replace(/\(\s+\)/g, "()")
        .trim();
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function checkAnswer() {
    if (currentQuestion === null) {
        alert("請先抽一題。");
        return;
    }

    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("請先選一個答案。");
        return;
    }

    doneCount++;

    if (selected.value === currentQuestion.answer) {
        correctCount++;
        document.getElementById("result").innerHTML = renderAnswerResult(true, selected.value);
    } else {
        wrongCount++;
        document.getElementById("result").innerHTML = renderAnswerResult(false, selected.value);
    }

    currentQuestion = null;
    updateStats();
}

function renderAnswerResult(isCorrect, selectedValue) {
    const plainExplanation = getPlainExplanation(currentQuestion);
    const answerSummary = isCorrect
        ? `<div style="color:green;font-size:20px;font-weight:bold;">答對了！</div>`
        : `
            <div style="color:red;font-size:20px;font-weight:bold;">答錯了</div>
            <br>
            你選的是：${escapeHtml(selectedValue)}<br>
            正確答案：${escapeHtml(currentQuestion.answer)}
        `;

    return `
        <div class="answer-summary">${answerSummary}</div>
        <section class="explanation-box plain-explanation">
            <h3>白話解釋</h3>
            ${paragraphsToHtml(plainExplanation)}
        </section>
        <section class="explanation-box official-explanation">
            <h3>官方解析</h3>
            ${paragraphsToHtml(formatOfficialExplanation(currentQuestion.explanation))}
        </section>
    `;
}

function getPlainExplanation(question) {
    if (question.plainExplanation) {
        return question.plainExplanation;
    }

    if (
        question.question.includes("high-risk") &&
        question.question.includes("low-risk") &&
        question.question.includes("no fires in the first and second years")
    ) {
        return [
            "這題的重點不是直接算「第三、四年沒火災」而已，因為題目已經告訴你：這個人前兩年都沒有火災。這個資訊會讓我們重新猜他比較可能是哪一種屋主。",
            "一開始，高風險屋主只有 10%，低風險屋主有 90%。低風險屋主每年沒火災的機率是 0.99，高風險是 0.80。所以如果一個人前兩年都沒火災，他更像是低風險屋主。",
            "我們要算的是：在「前兩年沒火災」這個條件下，後兩年也沒火災的機率。用條件機率想，就是「四年都沒火災的機率」除以「前兩年沒火災的機率」。",
            "四年都沒火災：高風險部分是 0.1 × 0.8^4，低風險部分是 0.9 × 0.99^4。前兩年沒火災：高風險部分是 0.1 × 0.8^2，低風險部分是 0.9 × 0.99^2。",
            "所以答案是 (0.1×0.8^4 + 0.9×0.99^4) / (0.1×0.8^2 + 0.9×0.99^2) ≈ 0.9571。直覺上也合理：前兩年都安全，代表他很可能是低風險，所以後兩年也安全的機率很高。"
        ].join("\n");
    }

    return [
        "先不要急著看公式。這題可以先抓三件事：題目給了哪些已知條件、它要你算哪個機率、官方解析把哪些情況分開討論。",
        "如果官方解析用了 H、L、X、Y 這種符號，通常是在把文字縮短。你可以先把符號翻回中文，再看它是不是在做條件機率、全機率公式，或貝氏定理。",
        "這題的官方答案是 " + question.answer + "。下面官方解析保留原文，方便你對照符號。"
    ].join("\n");
}

function formatOfficialExplanation(text) {
    return formatInlineText(text)
        .replace(/^Official solution:\s*([A-E])\s*/i, "Official solution: $1\n")
        .replace(/\s+(Let\b)/g, "\n$1")
        .replace(/\s+(Then\b)/g, "\n$1")
        .replace(/\s+(Therefore\b)/g, "\n$1")
        .replace(/\s+(Calculate\b)/g, "\n$1")
        .trim();
}

function paragraphsToHtml(text) {
    return String(text)
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => `<p>${escapeHtml(line)}</p>`)
        .join("");
}

function updateStats() {
    const accuracy = doneCount === 0 ? 0 : ((correctCount / doneCount) * 100).toFixed(1);

    document.getElementById("doneCount").innerText = doneCount;
    document.getElementById("correctCount").innerText = correctCount;
    document.getElementById("wrongCount").innerText = wrongCount;
    document.getElementById("accuracyText").innerText = `${accuracy}%`;
}

function showGame() {
    if (doneCount < REQUIRED_QUESTIONS_FOR_GAME) {
        const remaining = REQUIRED_QUESTIONS_FOR_GAME - doneCount;
        alert(`還要再完成 ${remaining} 題，才能休息玩蛇蛇 🐍`);
        return;
    }

    document.getElementById("studyPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
    startBreakTimer();
    drawBackground();
}

function showStudy() {
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("studyPage").style.display = "block";

    if (gameTimer !== null) {
        clearInterval(gameTimer);
        gameTimer = null;
    }

    if (breakTimer !== null) {
        clearInterval(breakTimer);
        breakTimer = null;
    }

    gameMode = "";
    modeText.innerText = "請選擇模式";
    timerText.innerText = "休息剩餘 10:00";
}

function chooseClassic() {
    gameMode = "classic";
    modeText.innerText = "經典模式：吃蘋果加分";
    startGame();
}

function chooseBattle() {
    gameMode = "battle";
    modeText.innerText = "對戰模式：讓敵人撞你來加分";
    startGame();
}

function startGame() {
    if (gameTimer !== null) {
        clearInterval(gameTimer);
    }

    isGameOver = false;
    resetGame();
    gameTimer = setInterval(gameMode === "classic" ? drawClassicGame : drawBattleGame, 180);
}

function resetGame() {
    snake = [
        { x: 100, y: 100 },
        { x: 80, y: 100 },
        { x: 60, y: 100 }
    ];

    dx = 20;
    dy = 0;
    score = 0;
    foodX = 200;
    foodY = 200;
    corpseFoods = [];
    enemies = [];

    createEnemy("red");
    createEnemy("blue");
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    const key = event.key.toLowerCase();

    if ((key === "arrowup" || key === "w") && dy === 0) {
        dx = 0;
        dy = -20;
    } else if ((key === "arrowdown" || key === "s") && dy === 0) {
        dx = 0;
        dy = 20;
    } else if ((key === "arrowleft" || key === "a") && dx === 0) {
        dx = -20;
        dy = 0;
    } else if ((key === "arrowright" || key === "d") && dx === 0) {
        dx = 20;
        dy = 0;
    }
}

function gameOver(text) {
    if (isGameOver) return;

    isGameOver = true;
    clearInterval(gameTimer);
    gameTimer = null;

    alert(`${text} 分數：${score}`);
    resetGame();
    drawBackground();
}

function drawClassicGame() {
    drawBackground();

    ctx.font = "24px Arial";
    ctx.fillStyle = "#222";
    ctx.fillText(`Score: ${score}`, 10, 30);

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    if (hitWall(head)) {
        gameOver("撞到牆了！");
        return;
    }

    if (hitSnakeBody(head, snake)) {
        gameOver("撞到自己了！");
        return;
    }

    snake.unshift(head);

    if (head.x === foodX && head.y === foodY) {
        score++;
        randomFood();
    } else {
        snake.pop();
    }

    drawApple(foodX, foodY);
    drawSnake(snake, "yellow");
}

function drawBattleGame() {
    drawBackground();

    ctx.font = "20px Arial";
    ctx.fillStyle = "#222";
    ctx.fillText(`分數: ${score}`, 10, 30);

    const redLength = enemies.find(enemy => enemy.color === "red")?.body.length ?? 0;
    const blueLength = enemies.find(enemy => enemy.color === "blue")?.body.length ?? 0;

    ctx.font = "16px Arial";
    ctx.fillText(`你: ${snake.length}`, 250, 35);
    ctx.fillText(`紅: ${redLength}`, 250, 60);
    ctx.fillText(`藍: ${blueLength}`, 250, 85);

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    if (hitWall(head)) {
        gameOver("撞到牆了！");
        return;
    }

    for (const enemy of enemies) {
        if (hitSnakeBody(head, enemy.body)) {
            gameOver("撞到敵人了！");
            return;
        }
    }

    snake.unshift(head);

    if (!eatCorpseFood(head)) {
        snake.pop();
    }

    for (const enemy of [...enemies]) {
        moveEnemy(enemy);
    }

    drawCorpseFoods();
    drawSnake(snake, "yellow");

    for (const enemy of enemies) {
        drawSnake(enemy.body, enemy.color);
    }
}

function moveEnemy(enemy) {
    const enemyHead = {
        x: enemy.body[0].x + enemy.dx,
        y: enemy.body[0].y + enemy.dy
    };

    if (hitWall(enemyHead)) {
        enemyDies(enemy);
        return;
    }

    if (hitSnakeBody(enemyHead, snake)) {
        enemyDies(enemy);
        score += 5;
        return;
    }

    enemy.body.unshift(enemyHead);
    enemy.body.pop();
    moveEnemyRandomly(enemy);
}

function enemyDies(enemy) {
    for (const part of enemy.body) {
        corpseFoods.push({ x: part.x, y: part.y, color: enemy.color });
    }

    createEnemy(enemy.color);
}

function createEnemy(color) {
    let startX;
    let startY;

    do {
        startX = Math.floor(Math.random() * 14 + 3) * 20;
        startY = Math.floor(Math.random() * 14 + 3) * 20;
    } while (snake.length > 0 && tooCloseToPlayer(startX, startY));

    enemies = enemies.filter(enemy => enemy.color !== color);
    enemies.push({
        color,
        body: [
            { x: startX, y: startY },
            { x: startX + 20, y: startY },
            { x: startX + 40, y: startY }
        ],
        dx: -20,
        dy: 0
    });
}

function tooCloseToPlayer(x, y) {
    return snake.some(part => Math.abs(part.x - x) < 100 && Math.abs(part.y - y) < 100);
}

function eatCorpseFood(head) {
    for (let i = 0; i < corpseFoods.length; i++) {
        if (head.x === corpseFoods[i].x && head.y === corpseFoods[i].y) {
            corpseFoods.splice(i, 1);
            score++;
            return true;
        }
    }

    return false;
}

function hitWall(head) {
    return head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400;
}

function hitSnakeBody(head, targetSnake) {
    return targetSnake.some(part => head.x === part.x && head.y === part.y);
}

function randomFood() {
    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;
}

function moveEnemyRandomly(enemy) {
    const r = Math.random();

    if (r < 0.25 && enemy.dy === 0) {
        enemy.dx = 0;
        enemy.dy = -20;
    } else if (r < 0.5 && enemy.dy === 0) {
        enemy.dx = 0;
        enemy.dy = 20;
    } else if (r < 0.75 && enemy.dx === 0) {
        enemy.dx = -20;
        enemy.dy = 0;
    } else if (enemy.dx === 0) {
        enemy.dx = 20;
        enemy.dy = 0;
    }
}

function drawBackground() {
    ctx.clearRect(0, 0, 400, 400);

    for (let x = 0; x < 20; x++) {
        for (let y = 0; y < 20; y++) {
            ctx.fillStyle = (x + y) % 2 === 0 ? "#9be77a" : "#86d96a";
            ctx.fillRect(x * 20, y * 20, 20, 20);
        }
    }
}

function drawCorpseFoods() {
    for (const food of corpseFoods) {
        ctx.fillStyle = food.color === "red" ? "#ff8a80" : "#90caf9";
        ctx.beginPath();
        ctx.arc(food.x + 10, food.y + 10, 6, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawSnake(snakeArray, color) {
    for (let i = snakeArray.length - 1; i >= 0; i--) {
        if (i === 0) {
            drawSnakeHead(snakeArray[i].x, snakeArray[i].y, color);
        } else {
            drawSnakeBody(snakeArray[i].x, snakeArray[i].y, color);
        }
    }
}

function drawSnakeBody(x, y, color) {
    if (color === "red") {
        ctx.fillStyle = "#e53935";
    } else if (color === "blue") {
        ctx.fillStyle = "#1e88e5";
    } else {
        ctx.fillStyle = "#ffd54f";
    }

    ctx.beginPath();
    ctx.arc(x + 10, y + 10, 10, 0, Math.PI * 2);
    ctx.fill();
}

function drawSnakeHead(x, y, color) {
    if (color === "red") {
        ctx.fillStyle = "#b71c1c";
    } else if (color === "blue") {
        ctx.fillStyle = "#0d47a1";
    } else {
        ctx.fillStyle = "#f9a825";
    }

    ctx.beginPath();
    ctx.arc(x + 10, y + 10, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x + 6, y + 7, 3, 0, Math.PI * 2);
    ctx.arc(x + 14, y + 7, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x + 6, y + 7, 1.5, 0, Math.PI * 2);
    ctx.arc(x + 14, y + 7, 1.5, 0, Math.PI * 2);
    ctx.fill();
}

function drawApple(x, y) {
    ctx.fillStyle = "#e53935";
    ctx.beginPath();
    ctx.arc(x + 10, y + 12, 9, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#4caf50";
    ctx.fillRect(x + 10, y + 2, 4, 7);
}

function startBreakTimer() {
    breakSeconds = 600;
    updateBreakTimerText();

    if (breakTimer !== null) {
        clearInterval(breakTimer);
    }

    breakTimer = setInterval(function () {
        breakSeconds--;
        updateBreakTimerText();

        if (breakSeconds <= 0) {
            clearInterval(breakTimer);
            breakTimer = null;
            alert("休息時間結束，回去練題！");
            showStudy();
        }
    }, 1000);
}

function updateBreakTimerText() {
    const minutes = Math.floor(breakSeconds / 60);
    const seconds = String(breakSeconds % 60).padStart(2, "0");
    timerText.innerText = `休息剩餘 ${minutes}:${seconds}`;
}

window.onload = function () {
    initQuestions();
    updateStats();
    updateBreakTimerText();
    drawBackground();
};

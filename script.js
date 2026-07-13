let currentQuestion = null;
let doneCount = 0;
let correctCount = 0;
let wrongCount = 0;
let remainingLocalQuestions = [];
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

function initLocalQuestions() {
    if (remainingLocalQuestions.length > 0) {
        return true;
    }

    if (typeof questions === "undefined" || questions.length === 0) {
        return false;
    }

    remainingLocalQuestions = [...questions];
    return true;
}

async function randomQuestion() {
    setResultMessage("題目載入中...");

    try {
        const response = await fetch("/api/questions/random");
        if (!response.ok) {
            throw new Error("Question API failed");
        }

        currentQuestion = await response.json();
        currentQuestion.source = "api";
        renderQuestion(currentQuestion);
        return;
    } catch (error) {
        if (!initLocalQuestions()) {
            setResultMessage("題庫載入失敗，請確認 Flask 後端已啟動，或 SOA 官方題庫快照已完成同步。");
            return;
        }
    }

    const randomIndex = Math.floor(Math.random() * remainingLocalQuestions.length);
    currentQuestion = remainingLocalQuestions[randomIndex];
    currentQuestion.source = "local";
    remainingLocalQuestions.splice(randomIndex, 1);
    renderQuestion(currentQuestion);
}

function renderQuestion(question) {
    document.getElementById("questionTitle").innerText =
        `Question ${question.id} - ${question.topic}`;
    document.getElementById("questionText").innerHTML = formatQuestionHtml(question.question);

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    question.options.forEach((option, index) => {
        const letter = String.fromCharCode(65 + index);
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = option;

        label.appendChild(radio);
        label.append(` ${letter}. ${formatInlineText(option)}`);
        optionsDiv.appendChild(label);
    });

    document.getElementById("result").innerHTML = "";
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
        .replace(/[\uE000-\uF8FF]/g, "")
        .replace(/\s+/g, " ")
        .replace(/\s+([,.;:])/g, "$1")
        .replace(/\(\s+\)/g, "()")
        .trim();
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

async function checkAnswer() {
    if (currentQuestion === null) {
        alert("請先抽一題。");
        return;
    }

    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("請先選擇一個答案。");
        return;
    }

    let result;

    if (currentQuestion.source === "api") {
        try {
            const response = await fetch("/api/answers/check", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    question_id: currentQuestion.id,
                    answer: selected.value
                })
            });

            if (!response.ok) {
                throw new Error("Answer API failed");
            }

            result = await response.json();
        } catch (error) {
            result = buildLocalAnswerResult(currentQuestion, selected.value);
        }
    } else {
        result = buildLocalAnswerResult(currentQuestion, selected.value);
    }

    doneCount++;

    if (result.correct) {
        correctCount++;
    } else {
        wrongCount++;
    }

    document.getElementById("result").innerHTML = renderAnswerResult(result, selected.value);
    currentQuestion = null;
    updateStats();
}

function buildLocalAnswerResult(question, selectedValue) {
    return {
        correct: selectedValue === question.answer,
        answer: question.answer,
        answer_letter: question.answerLetter,
        explanation: question.explanation || "",
        plain_explanation: plainExplanationFor(question)
    };
}

function plainExplanationFor(question) {
    if (question.plainExplanation) {
        return question.plainExplanation;
    }

    const questionText = String(question.question || "");
    const explanation = String(question.explanation || "");
    const numbers = keyNumbers(questionText);
    const calculations = keyCalculations(explanation);
    const lines = [
        `題目要做什麼：${explanationGoal(questionText)}`,
        `關鍵資料：${numbers.length ? numbers.join("、") : "先從題目標出所有已知條件。"}`,
        `解題方法：${explanationMethod(`${questionText} ${explanation}`)}`
    ];

    if (calculations.length) {
        lines.push(`官方解答的關鍵算式：${calculations.join(" → ")}`);
    } else {
        lines.push("官方解答的關鍵步驟：依照上面的事件或分布設定，逐步代入題目數值。");
    }

    lines.push(`結論：計算結果是 ${question.answer}，對應選項 ${question.answerLetter || ""}。`);
    return lines.join("\n");
}

function explanationGoal(text) {
    const lowered = text.toLowerCase();
    if (lowered.includes("given that")) return "這題要算條件機率：已知後面的條件已經發生，再縮小範圍計算。";
    if (lowered.includes("none") || lowered.includes("neither")) return "這題要算『全部都沒發生』的機率；通常先算至少一件發生，再用 1 減掉。";
    if (lowered.includes("both")) return "這題要算兩件事同時發生，也就是事件的交集。";
    if (lowered.includes("at least")) return "這題要算『至少』的情況；直接相加太多時，通常改算反面再用 1 減掉。";
    if (lowered.includes("exactly")) return "這題要算『剛好』指定次數的情況，不能把更多或更少的情況算進去。";
    if (lowered.includes("standard deviation")) return "這題要找標準差，也就是結果通常會離平均值多遠。";
    if (lowered.includes("variance")) return "這題要找變異數；先整理隨機變數的波動，再視需要相加或使用共變異數。";
    if (lowered.includes("expected") || lowered.includes("expectation")) return "這題要找長期平均值，也就是把每個可能結果乘上它的機率後加總。";
    if (lowered.includes("median") || lowered.includes("percentile")) return "這題要找分位點：讓累積機率剛好到題目指定的比例。";
    if (lowered.includes("probability")) return "這題要算目標事件的機率；先把文字條件翻成事件，再決定要相加、相減或使用條件機率。";
    return "這題要把題目給的條件整理成可計算的隨機變數或事件關係。";
}

function explanationMethod(text) {
    const lowered = text.toLowerCase();
    const rules = [
        [["without replacement", "hypergeometric"], "因為是從固定母體抽取而且不放回，各次抽取會互相影響，所以用超幾何分布／組合數。"],
        [["poisson"], "題目在數固定時間或區間內發生幾次，先找卜瓦松平均次數，再計算指定次數。"],
        [["exponential", "memoryless"], "題目在處理等待時間或壽命，使用指數分布的生存機率；若已經等了一段時間，可用記憶無關性。"],
        [["normal", "standard deviation", "standard normal"], "題目使用常態分布，先用平均數與標準差轉成 Z 值，再查相對應的累積機率。"],
        [["binomial", "number of successes", "probability of success"], "這是固定次數、每次只有成功或失敗的問題；先確認 n、成功機率 p，以及題目問剛好、至少或至多。"],
        [["uniform"], "均勻分布中每段長度同樣公平，因此機率可用目標區間長度除以總區間長度。"],
        [["density function", "probability density", "continuous"], "題目給的是連續型密度，機率不是看單一點，而是計算指定區間下方的面積。"],
        [["independent", "independence"], "題目指出事件獨立，所以同時發生時可以把各自的機率相乘。"],
        [["all three", "none of", "neither", "both", "union", "intersection"], "這是事件集合問題，先分清楚交集、聯集與補集，再用排容原理避免重複計算。"]
    ];
    const matched = rules.find(([keywords]) => keywords.some(keyword => lowered.includes(keyword)));
    return matched ? matched[1] : "依官方解答先定義事件或隨機變數，再把題目的文字條件逐項代入；不要只看最後答案。";
}

function keyNumbers(text) {
    const matches = text.match(/(?<![A-Za-z])(?:\d+\/\d+|\d+(?:,\d{3})*(?:\.\d+)?%?)/g) || [];
    return [...new Set(matches)].slice(0, 10);
}

function keyCalculations(explanation) {
    const calculations = [];
    explanation.split("\n").forEach(rawLine => {
        const line = rawLine
            .replace(/[’′]+/g, "")
            .replace(/\s+/g, " ")
            .replace(/(\d)\s*\.\s*(?=\d)/g, "$1.")
            .replace(/\s+[xX]\s+/g, " × ")
            .replace(/^[ ()]+|[ ()]+$/g, "");
        if (line.includes("=") && /\d/.test(line) && line.length >= 6 && line.length <= 220 && !calculations.includes(line)) {
            calculations.push(line);
        }
    });
    const numericCalculations = calculations.filter(line => (line.match(/\d+(?:\.\d+)?%?/g) || []).length >= 2);
    return (numericCalculations.length ? numericCalculations : calculations).slice(-2);
}

function renderAnswerResult(result, selectedValue) {
    const answerSummary = result.correct
        ? `<div class="answer-summary correct">答對了！</div>`
        : `
            <div class="answer-summary wrong">答錯了</div>
            <p>你的答案：${escapeHtml(selectedValue)}</p>
            <p>正確答案：${escapeHtml(result.answer)}</p>
        `;

    return `
        ${answerSummary}
        <section class="explanation-box plain-explanation">
            <h3>白話解釋</h3>
            ${paragraphsToHtml(result.plain_explanation)}
        </section>
        <section class="explanation-box official-explanation">
            <h3>官方解答</h3>
            ${paragraphsToHtml(formatOfficialExplanation(result.explanation))}
        </section>
    `;
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
    return String(text || "")
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

function setResultMessage(message) {
    document.getElementById("result").innerHTML = `<p>${escapeHtml(message)}</p>`;
}

function showGame() {
    if (doneCount < REQUIRED_QUESTIONS_FOR_GAME) {
        const remaining = REQUIRED_QUESTIONS_FOR_GAME - doneCount;
        alert(`還要再完成 ${remaining} 題，才能休息玩蛇蛇。`);
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
    modeText.innerText = "請選擇遊戲模式";
    timerText.innerText = "休息時間：10:00";
}

function chooseClassic() {
    gameMode = "classic";
    modeText.innerText = "一般模式：吃蘋果得分";
    startGame();
}

function chooseBattle() {
    gameMode = "battle";
    modeText.innerText = "對戰模式：避開敵人，吃掉敵人留下的食物";
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
        gameOver("撞到牆了");
        return;
    }

    if (hitSnakeBody(head, snake)) {
        gameOver("撞到自己了");
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
    ctx.fillText(`玩家 ${snake.length}`, 250, 35);
    ctx.fillText(`紅蛇 ${redLength}`, 250, 60);
    ctx.fillText(`藍蛇 ${blueLength}`, 250, 85);

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    if (hitWall(head)) {
        gameOver("撞到牆了");
        return;
    }

    for (const enemy of enemies) {
        if (hitSnakeBody(head, enemy.body)) {
            gameOver("撞到敵人了");
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
            alert("休息時間結束，回到題庫繼續練習。");
            showStudy();
        }
    }, 1000);
}

function updateBreakTimerText() {
    const minutes = Math.floor(breakSeconds / 60);
    const seconds = String(breakSeconds % 60).padStart(2, "0");
    timerText.innerText = `休息時間：${minutes}:${seconds}`;
}

document.getElementById("nextQuestionButton").addEventListener("click", randomQuestion);
document.getElementById("checkAnswerButton").addEventListener("click", checkAnswer);
document.getElementById("showGameButton").addEventListener("click", showGame);
document.getElementById("classicButton").addEventListener("click", chooseClassic);
document.getElementById("battleButton").addEventListener("click", chooseBattle);
document.getElementById("backToStudyButton").addEventListener("click", showStudy);
document.addEventListener("keydown", changeDirection);

window.onload = function () {
    initLocalQuestions();
    updateStats();
    updateBreakTimerText();
    drawBackground();
};

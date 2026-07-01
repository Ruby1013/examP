const questions = [
    {
        id: 1,
        topic: "Probability",
        question: "A fair coin is tossed 3 times. What is the probability of getting exactly 2 heads?",
        options: ["1/8", "3/8", "1/2", "5/8", "3/4"],
        answer: "3/8",
        explanation: "Choose which 2 of the 3 tosses are heads: C(3,2) / 2^3 = 3/8."
    },
    {
        id: 2,
        topic: "Probability",
        question: "A fair die is rolled once. What is the probability of rolling a number greater than 4?",
        options: ["1/6", "1/3", "1/2", "2/3", "5/6"],
        answer: "1/3",
        explanation: "The outcomes greater than 4 are 5 and 6, so the probability is 2/6 = 1/3."
    },
    {
        id: 3,
        topic: "Set Theory",
        question: "If P(A)=0.4, P(B)=0.5, and P(A and B)=0.2, what is P(A or B)?",
        options: ["0.5", "0.6", "0.7", "0.8", "0.9"],
        answer: "0.7",
        explanation: "P(A or B) = P(A) + P(B) - P(A and B) = 0.4 + 0.5 - 0.2 = 0.7."
    },
    {
        id: 4,
        topic: "Conditional Probability",
        question: "If P(A and B)=0.12 and P(B)=0.3, what is P(A|B)?",
        options: ["0.24", "0.36", "0.4", "0.5", "0.6"],
        answer: "0.4",
        explanation: "P(A|B) = P(A and B) / P(B) = 0.12 / 0.3 = 0.4."
    },
    {
        id: 5,
        topic: "Combinatorics",
        question: "How many ways can 2 people be selected from 6 people?",
        options: ["6", "10", "12", "15", "30"],
        answer: "15",
        explanation: "C(6,2) = 6 x 5 / 2 = 15."
    },
    {
        id: 6,
        topic: "Probability",
        question: "A card is drawn from a standard 52-card deck. What is the probability that it is a heart?",
        options: ["1/52", "1/26", "1/13", "1/4", "1/2"],
        answer: "1/4",
        explanation: "There are 13 hearts in 52 cards, so the probability is 13/52 = 1/4."
    },
    {
        id: 7,
        topic: "Probability",
        question: "Two fair dice are rolled. What is the probability that the sum is 7?",
        options: ["1/12", "1/9", "1/6", "1/4", "1/3"],
        answer: "1/6",
        explanation: "There are 6 outcomes that sum to 7 out of 36 total outcomes, so 6/36 = 1/6."
    },
    {
        id: 8,
        topic: "Independence",
        question: "If A and B are independent, P(A)=0.3 and P(B)=0.4, what is P(A and B)?",
        options: ["0.07", "0.12", "0.3", "0.4", "0.7"],
        answer: "0.12",
        explanation: "For independent events, P(A and B) = P(A)P(B) = 0.3 x 0.4 = 0.12."
    },
    {
        id: 9,
        topic: "Complement",
        question: "If the probability of raining tomorrow is 0.35, what is the probability that it will not rain?",
        options: ["0.35", "0.45", "0.55", "0.65", "0.75"],
        answer: "0.65",
        explanation: "Use the complement: 1 - 0.35 = 0.65."
    },
    {
        id: 10,
        topic: "Expected Value",
        question: "A random variable X takes values 0 and 10 with probabilities 0.7 and 0.3. What is E[X]?",
        options: ["2", "3", "5", "7", "10"],
        answer: "3",
        explanation: "E[X] = 0 x 0.7 + 10 x 0.3 = 3."
    },
    {
        id: 11,
        topic: "Probability",
        question: "A fair coin is tossed 4 times. What is the probability of getting exactly 3 heads?",
        options: ["1/16", "1/8", "1/4", "3/8", "1/2"],
        answer: "1/4",
        explanation: "C(4,3) / 2^4 = 4/16 = 1/4."
    },
    {
        id: 12,
        topic: "Combinatorics",
        question: "How many ways can 3 people be selected from 8 people?",
        options: ["24", "56", "64", "112", "336"],
        answer: "56",
        explanation: "C(8,3) = 8 x 7 x 6 / (3 x 2 x 1) = 56."
    },
    {
        id: 13,
        topic: "Conditional Probability",
        question: "If P(A and B)=0.15 and P(B)=0.5, what is P(A|B)?",
        options: ["0.15", "0.2", "0.25", "0.3", "0.5"],
        answer: "0.3",
        explanation: "P(A|B) = 0.15 / 0.5 = 0.3."
    },
    {
        id: 14,
        topic: "Probability",
        question: "A card is drawn from a standard deck. What is the probability that it is a King?",
        options: ["1/52", "1/26", "1/13", "1/4", "4/13"],
        answer: "1/13",
        explanation: "There are 4 Kings in 52 cards, so 4/52 = 1/13."
    },
    {
        id: 15,
        topic: "Expected Value",
        question: "A random variable X equals 1, 2, 3 with probabilities 0.2, 0.3, 0.5. What is E[X]?",
        options: ["1.8", "2.0", "2.3", "2.5", "3.0"],
        answer: "2.3",
        explanation: "E[X] = 1 x 0.2 + 2 x 0.3 + 3 x 0.5 = 2.3."
    },
    {
        id: 16,
        topic: "Binomial",
        question: "If X~Bin(5,0.5), what is P(X=0)?",
        options: ["1/32", "5/32", "10/32", "16/32", "31/32"],
        answer: "1/32",
        explanation: "P(X=0) = (0.5)^5 = 1/32."
    },
    {
        id: 17,
        topic: "Probability",
        question: "Two fair dice are rolled. What is the probability that the sum is 8?",
        options: ["1/12", "5/36", "1/6", "7/36", "1/4"],
        answer: "5/36",
        explanation: "The sums are (2,6), (3,5), (4,4), (5,3), and (6,2), so 5/36."
    },
    {
        id: 18,
        topic: "Set Theory",
        question: "If P(A)=0.6, P(B)=0.5 and P(A and B)=0.3, what is P(A or B)?",
        options: ["0.5", "0.6", "0.7", "0.8", "0.9"],
        answer: "0.8",
        explanation: "P(A or B) = 0.6 + 0.5 - 0.3 = 0.8."
    },
    {
        id: 19,
        topic: "Probability",
        question: "A fair die is rolled. What is the probability of an odd number?",
        options: ["1/6", "1/3", "1/2", "2/3", "5/6"],
        answer: "1/2",
        explanation: "The odd outcomes are 1, 3, and 5, so 3/6 = 1/2."
    },
    {
        id: 20,
        topic: "Geometric Distribution",
        question: "A fair coin is tossed until the first Head. What is the probability that the first Head occurs on toss 3?",
        options: ["1/8", "1/4", "3/8", "1/2", "3/4"],
        answer: "1/8",
        explanation: "The sequence must be TTH, with probability (1/2)^3 = 1/8."
    },
    {
        id: 21,
        topic: "Probability",
        question: "A fair coin is tossed 5 times. What is the probability of getting exactly 2 heads?",
        options: ["5/32", "10/32", "15/32", "20/32", "25/32"],
        answer: "10/32",
        explanation: "C(5,2) / 2^5 = 10/32."
    },
    {
        id: 22,
        topic: "Combinatorics",
        question: "How many different arrangements are there of the letters ABCD?",
        options: ["12", "24", "36", "48", "64"],
        answer: "24",
        explanation: "There are 4 distinct letters, so the number of arrangements is 4! = 24."
    },
    {
        id: 23,
        topic: "Conditional Probability",
        question: "If P(A)=0.4, P(B)=0.5, and P(A and B)=0.1, what is P(A|B)?",
        options: ["0.1", "0.2", "0.3", "0.4", "0.5"],
        answer: "0.2",
        explanation: "P(A|B) = P(A and B) / P(B) = 0.1 / 0.5 = 0.2."
    },
    {
        id: 24,
        topic: "Probability",
        question: "A card is drawn from a standard deck. What is the probability that it is a Queen?",
        options: ["1/52", "1/26", "1/13", "1/4", "4/13"],
        answer: "1/13",
        explanation: "There are 4 Queens in 52 cards, so 4/52 = 1/13."
    },
    {
        id: 25,
        topic: "Expected Value",
        question: "A random variable X equals 2 and 8 with probabilities 0.6 and 0.4. What is E[X]?",
        options: ["4", "4.4", "5.2", "6", "8"],
        answer: "4.4",
        explanation: "E[X] = 2 x 0.6 + 8 x 0.4 = 4.4."
    },
    {
        id: 26,
        topic: "Binomial",
        question: "If X~Bin(4,0.5), what is P(X=4)?",
        options: ["1/16", "4/16", "6/16", "8/16", "15/16"],
        answer: "1/16",
        explanation: "P(X=4) = (0.5)^4 = 1/16."
    },
    {
        id: 27,
        topic: "Probability",
        question: "Two fair dice are rolled. What is the probability that the sum is 9?",
        options: ["1/12", "1/9", "1/6", "4/36", "5/36"],
        answer: "4/36",
        explanation: "The sums are (3,6), (4,5), (5,4), and (6,3), so 4/36."
    },
    {
        id: 28,
        topic: "Set Theory",
        question: "If P(A)=0.3, P(B)=0.4 and P(A and B)=0.1, what is P(A or B)?",
        options: ["0.4", "0.5", "0.6", "0.7", "0.8"],
        answer: "0.6",
        explanation: "P(A or B) = 0.3 + 0.4 - 0.1 = 0.6."
    },
    {
        id: 29,
        topic: "Probability",
        question: "A fair die is rolled. What is the probability of rolling a prime number?",
        options: ["1/6", "1/3", "1/2", "2/3", "5/6"],
        answer: "1/2",
        explanation: "The prime outcomes are 2, 3, and 5, so 3/6 = 1/2."
    },
    {
        id: 30,
        topic: "Geometric Distribution",
        question: "A fair coin is tossed until the first Head. What is the probability that the first Head occurs on toss 4?",
        options: ["1/16", "1/8", "3/16", "1/4", "1/2"],
        answer: "1/16",
        explanation: "The sequence must be TTTH, with probability (1/2)^4 = 1/16."
    },
    {
        id: 31,
        topic: "Probability",
        question: "A fair coin is tossed 6 times. What is the probability of getting exactly 3 heads?",
        options: ["5/16", "10/64", "15/64", "20/64", "30/64"],
        answer: "20/64",
        explanation: "C(6,3) / 2^6 = 20/64."
    },
    {
        id: 32,
        topic: "Combinatorics",
        question: "How many ways can 4 people be selected from 10 people?",
        options: ["120", "180", "210", "252", "360"],
        answer: "210",
        explanation: "C(10,4) = 210."
    },
    {
        id: 33,
        topic: "Conditional Probability",
        question: "If P(A and B)=0.18 and P(B)=0.6, what is P(A|B)?",
        options: ["0.2", "0.25", "0.3", "0.35", "0.4"],
        answer: "0.3",
        explanation: "P(A|B) = 0.18 / 0.6 = 0.3."
    },
    {
        id: 34,
        topic: "Probability",
        question: "A card is drawn from a standard deck. What is the probability that it is a Jack?",
        options: ["1/52", "1/26", "1/13", "1/4", "4/13"],
        answer: "1/13",
        explanation: "There are 4 Jacks in 52 cards, so 4/52 = 1/13."
    },
    {
        id: 35,
        topic: "Expected Value",
        question: "A random variable X equals 1 and 9 with probabilities 0.7 and 0.3. What is E[X]?",
        options: ["2.8", "3.4", "4.2", "5.1", "6.0"],
        answer: "3.4",
        explanation: "E[X] = 1 x 0.7 + 9 x 0.3 = 3.4."
    },
    {
        id: 36,
        topic: "Binomial",
        question: "If X~Bin(3,0.5), what is P(X=2)?",
        options: ["1/8", "2/8", "3/8", "4/8", "5/8"],
        answer: "3/8",
        explanation: "C(3,2)(0.5)^3 = 3/8."
    },
    {
        id: 37,
        topic: "Probability",
        question: "Two fair dice are rolled. What is the probability that the sum is 10?",
        options: ["2/36", "3/36", "4/36", "5/36", "6/36"],
        answer: "3/36",
        explanation: "The sums are (4,6), (5,5), and (6,4), so 3/36."
    },
    {
        id: 38,
        topic: "Set Theory",
        question: "If P(A)=0.7, P(B)=0.4 and P(A and B)=0.2, what is P(A or B)?",
        options: ["0.7", "0.8", "0.9", "1.0", "1.1"],
        answer: "0.9",
        explanation: "P(A or B) = 0.7 + 0.4 - 0.2 = 0.9."
    },
    {
        id: 39,
        topic: "Probability",
        question: "A fair die is rolled. What is the probability of rolling a number less than 3?",
        options: ["1/6", "2/6", "3/6", "4/6", "5/6"],
        answer: "2/6",
        explanation: "The outcomes less than 3 are 1 and 2, so 2/6."
    },
    {
        id: 40,
        topic: "Geometric Distribution",
        question: "A fair coin is tossed until the first Head. What is the probability that the first Head occurs on toss 5?",
        options: ["1/32", "1/16", "3/32", "1/8", "1/4"],
        answer: "1/32",
        explanation: "The sequence must be TTTTH, with probability (1/2)^5 = 1/32."
    },
    {
        id: 41,
        topic: "Probability",
        question: "A fair coin is tossed 7 times. What is the probability of getting exactly 4 heads?",
        options: ["21/128", "28/128", "35/128", "42/128", "56/128"],
        answer: "35/128",
        explanation: "C(7,4) / 2^7 = 35/128."
    },
    {
        id: 42,
        topic: "Combinatorics",
        question: "How many ways can 5 people be selected from 10 people?",
        options: ["126", "210", "252", "360", "720"],
        answer: "252",
        explanation: "C(10,5) = 252."
    },
    {
        id: 43,
        topic: "Conditional Probability",
        question: "If P(A and B)=0.24 and P(B)=0.8, what is P(A|B)?",
        options: ["0.2", "0.25", "0.3", "0.35", "0.4"],
        answer: "0.3",
        explanation: "P(A|B) = 0.24 / 0.8 = 0.3."
    },
    {
        id: 44,
        topic: "Probability",
        question: "A card is drawn from a standard deck. What is the probability that it is a spade?",
        options: ["1/13", "1/4", "1/2", "13/52", "26/52"],
        answer: "1/4",
        explanation: "There are 13 spades in 52 cards, so 13/52 = 1/4."
    },
    {
        id: 45,
        topic: "Expected Value",
        question: "A random variable X equals 0 and 20 with probabilities 0.9 and 0.1. What is E[X]?",
        options: ["1", "2", "3", "4", "5"],
        answer: "2",
        explanation: "E[X] = 0 x 0.9 + 20 x 0.1 = 2."
    },
    {
        id: 46,
        topic: "Binomial",
        question: "If X~Bin(4,0.5), what is P(X=2)?",
        options: ["4/16", "5/16", "6/16", "7/16", "8/16"],
        answer: "6/16",
        explanation: "C(4,2)(0.5)^4 = 6/16."
    },
    {
        id: 47,
        topic: "Probability",
        question: "Two fair dice are rolled. What is the probability that the sum is 11?",
        options: ["1/36", "2/36", "3/36", "4/36", "5/36"],
        answer: "2/36",
        explanation: "The sums are (5,6) and (6,5), so 2/36."
    },
    {
        id: 48,
        topic: "Set Theory",
        question: "If P(A)=0.8, P(B)=0.5 and P(A and B)=0.4, what is P(A or B)?",
        options: ["0.8", "0.9", "1.0", "1.1", "1.2"],
        answer: "0.9",
        explanation: "P(A or B) = 0.8 + 0.5 - 0.4 = 0.9."
    },
    {
        id: 49,
        topic: "Probability",
        question: "A fair die is rolled. What is the probability of rolling a number greater than 2?",
        options: ["2/6", "3/6", "4/6", "5/6", "6/6"],
        answer: "4/6",
        explanation: "The outcomes greater than 2 are 3, 4, 5, and 6, so 4/6."
    },
    {
        id: 50,
        topic: "Geometric Distribution",
        question: "A fair coin is tossed until the first Head. What is the probability that the first Head occurs on toss 6?",
        options: ["1/64", "1/32", "3/64", "1/16", "1/8"],
        answer: "1/64",
        explanation: "The sequence must be TTTTTH, with probability (1/2)^6 = 1/64."
    }
];

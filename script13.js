const questions13 = [{
    question: "-a / -i",
    answers : [
        { text : "plural", correct: true },
        { text : "state or quality", correct: false },
        { text : "down / make opposite", correct: false },
        { text : "cause (to make)", correct: false }
    ]}, {
    question: "ab-",
    answers : [
        { text : "away", correct: true },
        { text : "against", correct: false },
        { text : "down / make opposite", correct: false },
        { text : "state or quality", correct: false }
    ]}, {
    question: "anti-",
    answers : [
        { text : "against", correct: true },
        { text : "away", correct: false },
        { text : "down / make opposite", correct: false },
        { text : "state or quality", correct: false }
    ]}, {
    question: "-cy",
    answers : [
        { text : "state or quality", correct: true },
        { text : "with / together", correct: false },
        { text : "down / make opposite", correct: false },
        { text : "nature of", correct: false }
    ]}, {
    question: "-en",
    answers : [
        { text : "to make", correct: true },
        { text : "time", correct: false },
        { text : "relating to", correct: false },
        { text : "state or quality", correct: false }
    ]}, {
    question: "-ence / -ance",
    answers : [
        { text : "state or quality", correct: true },
        { text : "resembling", correct: false },
        { text : "suitable", correct: false },
        { text : "nature of", correct: false }
    ]}, {
    question: "-ics",
    answers : [
        { text : "art", correct: true },
        { text : "nature of", correct: false },
        { text : "suitable", correct: false },
        { text : "resembling", correct: false }
    ]}, {
    question: "-ine",
    answers : [
        { text : "nature of", correct: true },
        { text : "art", correct: false },
        { text : "suitable", correct: false },
        { text : "resembling", correct: false }
    ]}, {
    question: "-ism",
    answers : [
        { text : "doctrine", correct: true },
        { text : "within", correct: false },
        { text : "down / make opposite", correct: false },
        { text : "state or quality", correct: false }
    ]}, {
    question: "-ive",
    answers : [
        { text : "relating to", correct: true },
        { text : "resembling", correct: false },
        { text : "suitable", correct: false },
        { text : "one who", correct: false }
    ]}, {
    question: "-like",
    answers : [
        { text : "resembling", correct: true },
        { text : "relating to", correct: false },
        { text : "suitable", correct: false },
        { text : "nature of", correct: false }
    ]}, {
    question: "-worthy",
    answers : [
        { text : "suitable", correct: true },
        { text : "doctrine", correct: false },
        { text : "to make", correct: false },
        { text : "reward", correct: false }
    ]}, {
    question: "circum / circ",
    answers : [
        { text : "around / ring", correct: true },
        { text : "across", correct: false },
        { text : "outer", correct: false },
        { text : "whole", correct: false }
    ]}, {
    question: "co- / com- / con-",
    answers : [
        { text : "with / together", correct: true },
        { text : "together / same", correct: false },
        { text : "whole", correct: false },
        { text : "beyond", correct: false }
    ]}, {
    question: "de-",
    answers : [
        { text : "down / make opposite", correct: true },
        { text : "away", correct: false },
        { text : "against", correct: false },
        { text : "without / not", correct: false }
    ]}, {
    question: "dia-",
    answers : [
        { text : "across", correct: true },
        { text : "within", correct: false },
        { text : "whole", correct: false },
        { text : "in or toward", correct: false }
    ]}, {
    question: "endo-",
    answers : [
        { text : "within", correct: true },
        { text : "across", correct: false },
        { text : "whole", correct: false },
        { text : "glow / warm", correct: false }
    ]}, {
    question: "ex- / ecto- / ef- / e- ",
    answers : [
        { text : "out / outer", correct: true },
        { text : "around / ring", correct: false },
        { text : "beyond", correct: false },
        { text : "in", correct: false }
    ]}, {
    question: "holo-",
    answers : [
        { text : "whole", correct: true },
        { text : "under", correct: false },
        { text : "out / outer", correct: false },
        { text : "away", correct: false }
    ]}, {
    question: "hyp-",
    answers : [
        { text : "under", correct: true },
        { text : "bad / ill", correct: false },
        { text : "without / not", correct: false },
        { text : "down / make opposite", correct: false }
    ]}, {
    question: "mal-",
    answers : [
        { text : "bad / ill", correct: true },
        { text : "under", correct: false },
        { text : "against", correct: false },
        { text : "away", correct: false }
    ]}, {
    question: "post-",
    answers : [
        { text : "against", correct: true },
        { text : "after", correct: false },
        { text : "forward", correct: false },
        { text : "beyond", correct: false }
    ]}, {
    question: "pro-",
    answers : [
        { text : "forward", correct: true },
        { text : "backward", correct: false },
        { text : "toward", correct: false },
        { text : "away", correct: false }
    ]}, {
    question: "sym- / syn-",
    answers : [
        { text : "together / same", correct: true },
        { text : "with / together", correct: false },
        { text : "down / make opposite", correct: false },
        { text : "state or quality", correct: false }
    ]}, {
    question: "ultra- / ulter-",
    answers : [
        { text : "beyond", correct: true },
        { text : "away", correct: false },
        { text : "forard", correct: false },
        { text : "after", correct: false }
    ]}
]

const startButton13 = document.getElementById("start13");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const options = document.getElementById("options");
const nextButton = document.getElementById("next");

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

startButton13.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    startQuiz(questions13);
});

function startQuiz() {
    currentQuestions = shuffle([...questions13]);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next &#8594;";
    nextButton.style.display = "none";
    showQuestion();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    resetState();

    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    shuffle(currentQuestion.answers).forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        options.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (options.firstChild) {
        options.removeChild(options.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        const correctBtn = Array.from(options.children).find(btn => btn.dataset.correct === "true");
        if (correctBtn) correctBtn.classList.add("correct");
    }

    Array.from(options.children).forEach(button => button.disabled = true);

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of 25!`;
    nextButton.style.display = "none";

    const playAgain = document.createElement("button");
    playAgain.innerHTML = "Play Again";
    playAgain.classList.add("btn");
    playAgain.addEventListener("click", () => { startQuiz(currentQuestions); });
    options.appendChild(playAgain);

    const homePage = document.createElement("button");
    homePage.innerHTML = "Home &#9166;";
    homePage.classList.add("btn");
    homePage.addEventListener("click", () => { window.location.href = "file:///C:/Users/nkond/Downloads/Stems-List/index.html"; });
    options.appendChild(homePage);

    const nextList = document.createElement("button");
    nextList.innerHTML = "Next List &#8594;";
    nextList.classList.add("btn");
    nextList.addEventListener("click", () => { window.location.href ="file:///C:/Users/nkond/Downloads/Stems-List/list14.html"; });
    options.appendChild(nextList);
}


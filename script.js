const geographyQuestions = [ // pls pr more questions
    {
        question: "Wht is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "What is the longest river in the world?",
        choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: 1
    },
    {
        question: "Which country is home to the Taj Mahal?",
        choices: ["India", "Pakistan", "Nepal", "Sri Lanka"],
        answer: 0
    },
    {
        question: "What is the highest mountain in North America?",
        choices: ["Mount Everest", "Mount Kilimanjaro", "Mount McKinley", "Mount Fuji"],
        answer: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: 1
    },
    {
        question: "What is the capital of the United States?",
        choices: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
        answer: 2
    },
    {
        question: "Which country is known as the \"Land of the Rising Son\"?",
        choices: ["China", "Japan", "South Korea", "India"],
        answer: 1
    },
    {
        question: "What is the largest continent in the world?",
        choices: ["Africa", "Asia", "North America", "South America"],
        answer: 1
    },
    {
        question: "What is the smallest country in the world?",
        choices: ["Vatican City", "Monaco", "Liechtenstein", "San Marino"],
        answer: 0
    },
    {
        question: "What is the capital of Canada?",
        choices: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
        answer: 2
    },
    {
        question: "Which country is famous for its canals and gondolas?",
        choices: ["Italy", "Spain", "France", "Netherlands"],
        answer: 0
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctic Desert"],
        answer: 0
    },
    {
        question: "What is the name of the Earth's outermost layer?",
        choices: ["Crust", "Mantle", "Core", "Lithosphere"],
        answer: 0
    },
    {
        question: "What is the capital of Australia?",
        choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: 2
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        choices: ["Australia", "Indonesia", "Philippines", "Fiji"],
        answer: 0
    },
    {
        question: "What is the name of the largest freshwater lake in the world?",
        choices: ["Lake Superior", "Lake Victoria", "Lake Baikal", "Lake Huron"],
        answer: 0
    },
    {
        question: "What is the capital of England?",
        choices: ["London", "Manchester", "Birmingham", "Liverpool"],
        answer: 0
    },
    {
        question: "Which country is known for its pyramids and pharaohs?",
        choices: ["Egypt", "Greece", "Rome", "Mexico"],
        answer: 0
    },
    {
        question: "What is the name of the tectonic plate that the United States is on?",
        choices: ["Eurasian Plate", "North American Plate", "South American Plate", "Pacific Plate"],
        answer: 1
    },
    {
        question: "What is the capital of Spain?",
        choices: ["Barcelona", "Madrid", "Valencia", "Seville"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");
const resultsElement = document.getElementById("results");
const progressBar = document.getElementById("progress");

function loadQuestion() {
    questionElement.textContent = geographyQuestions[currentQuestion].question;

    choicesElement.innerHTML = "";
    for (let i = 0; i < geographyQuestions[currentQuestion].choices.length; i++) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = i;
        label.appendChild(input);
        label.appendChild(document.createTextNode(geographyQuestions[currentQuestion].choices[i]));
        choicesElement.appendChild(label);
    }

    // prog bar
    const progressPercentage = ((currentQuestion + 1) / geographyQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}
// pls send help
function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice && selectedChoice.value == geographyQuestions[currentQuestion].answer) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < geographyQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    resultsElement.innerHTML = `You have ${score} points out of ${geographyQuestions.length} points!`;
}

loadQuestion();

submitButton.addEventListener("click", () => {
    checkAnswer();
    nextQuestion();
});
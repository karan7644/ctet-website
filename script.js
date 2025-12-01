const questions = [
    {
        question: "1. Which of the following is a principle of child development?",
        options: [
            "It occurs overnight",
            "It is a continuous process",
            "It cannot be measured"
        ],
        correct: 1
    },

    {
        question: "2. Who is known as the father of cognitive development?",
        options: [
            "Vygotsky",
            "Kohlberg",
            "Piaget"
        ],
        correct: 2
    }
];

function loadQuiz() {
    const quizArea = document.getElementById("quiz-area");
    quizArea.innerHTML = "";

    questions.forEach((q, index) => {
        let html = `
            <div class="question-block">
                <h3>${q.question}</h3>
        `;

        q.options.forEach((opt, i) => {
            html += `
                <label>
                    <input type="radio" name="q${index}" value="${i}">
                    ${opt}
                </label><br>
            `;
        });

        html += `
            <button onclick="checkAnswer(${index})">Check Answer</button>
            <p id="result-${index}"></p>
            </div>
        `;

        quizArea.innerHTML += html;
    });
}

function checkAnswer(index) {
    const options = document.getElementsByName(`q${index}`);
    let selected = -1;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) selected = parseInt(options[i].value);
    }

    const result = document.getElementById(`result-${index}`);

    if (selected === -1) {
        result.innerHTML = "Please select an option!";
        result.style.color = "orange";
        return;
    }

    if (selected === questions[index].correct) {
        result.innerHTML = "✔ Correct!";
        result.style.color = "green";
    } else {
        result.innerHTML = "✘ Wrong!";
        result.style.color = "red";
    }
}

loadQuiz();

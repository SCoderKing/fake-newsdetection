function calculateScore() {

    let score = 0;

    const answers = document.querySelectorAll(
        'input[type="radio"]:checked'
    );


    answers.forEach(function(answer) {

        score += Number(answer.value);

    });


    const totalQuestions = 3;


    const scoreBox = document.getElementById("score");
    let attempts =
    Number(localStorage.getItem("quizAttempts") || 0);

attempts++;

localStorage.setItem("quizAttempts", attempts);


    scoreBox.innerHTML = `

        Your Score: ${score} / ${totalQuestions}

        <br><br>

        ${
            score === totalQuestions
            ? "Excellent! You understand the basics of media literacy."
            : "Good attempt! Review the media literacy tips and try again."
        }

    `;

}
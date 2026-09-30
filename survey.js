function calculateSurvey() {

    let score = 0;

    let answered = 0;


    // Get selected answers

    const questions = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5"
    ];


    questions.forEach(function(question) {

        const answer =
            document.querySelector(
                `input[name="${question}"]:checked`
            );


        if (answer) {

            score += Number(answer.value);

            answered++;

        }

    });


    const result =
        document.getElementById("surveyResult");


    // Check if all questions answered

    if (answered < questions.length) {

        result.style.display = "block";

        result.className = "survey-error";

        result.innerHTML = `

            <h3>⚠️ Complete the Survey</h3>

            <p>
                Please answer all questions before
                submitting the survey.
            </p>

        `;

        return;

    }


    // Maximum score = 10

    let message = "";


    if (score >= 8) {

        message = `

            <h3>🌟 Strong Media Literacy Awareness</h3>

            <p>
                Your answers show strong awareness of
                basic information-verification practices.
            </p>

        `;

    }

    else if (score >= 5) {

        message = `

            <h3>👍 Moderate Media Literacy Awareness</h3>

            <p>
                You are aware of several verification
                practices, but there is room to improve.
            </p>

        `;

    }

    else {

        message = `

            <h3>📚 More Awareness Can Help</h3>

            <p>
                Consider learning more about checking
                sources, dates, context and evidence
                before sharing information.
            </p>

        `;

    }


    result.style.display = "block";

    result.className = "survey-result";


    result.innerHTML = `

        ${message}

        <hr>

        <h3>
            Awareness Score: ${score} / 10
        </h3>

        <p>
            This result is an educational self-assessment,
            not a scientific measurement.
        </p>

    `;

let responses =
    Number(localStorage.getItem("surveyResponses") || 0);

responses++;

localStorage.setItem(
    "surveyResponses",
    responses
);
}
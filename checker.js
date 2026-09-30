function checkNews() {

    const textBox = document.getElementById("newsText");
    const result = document.getElementById("result");

    const text = textBox.value.toLowerCase().trim();
    let checks =
    Number(localStorage.getItem("newsChecks") || 0);

checks++;

localStorage.setItem("newsChecks", checks);

    if (text === "") {

        result.style.display = "block";
        result.className = "result-error";

        result.innerHTML = `
            <h3>⚠️ Please Enter News</h3>
            <p>
                Paste a news message or statement before checking.
            </p>
        `;

        return;
    }

    const warningWords = [
        "urgent",
        "forward this",
        "share immediately",
        "100% true",
        "guaranteed",
        "breaking",
        "shocking",
        "miracle",
        "secret",
        "you will not believe"
    ];

    let warnings = [];

    warningWords.forEach(function(word) {

        if (text.includes(word)) {
            warnings.push(word);
        }

    });

    result.style.display = "block";

    if (warnings.length > 0) {

        result.className = "result-warning";

        result.innerHTML = `
            <h3>⚠️ Warning Signs Found</h3>

            <p>
                This message contains words or phrases
                commonly associated with sensational content.
            </p>

            <p>
                <strong>Warning terms found:</strong>
                ${warnings.join(", ")}
            </p>

            <p>
                🔎 Verify the information using reliable
                sources before sharing it.
            </p>
        `;

    } else {

        result.className = "result-safe";

        result.innerHTML = `
            <h3>ℹ️ No Common Warning Terms Found</h3>

            <p>
                The selected warning terms were not found.
            </p>

            <p>
                ⚠️ This does NOT prove that the information
                is true. Always verify the source, date,
                author and evidence.
            </p>
        `;
    }
}
function checkNews() {

    alert("SUCCESS! checker.js is connected.");

}
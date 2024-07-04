let currentQuestion = 1; // Start with the first question
const totalQuestions = 2; // Total number of questions

function showQuestion(questionNumber) {
    document.getElementById(`question${questionNumber}`).style.display = 'block';
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        document.getElementById(`question${currentQuestion}`).style.display = 'none';
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function showResult() {
    // Implement logic to calculate and display quiz result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Thank you for taking the quiz!';
}

// Show the first question initially
showQuestion(currentQuestion);

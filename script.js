function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    const goal = form.elements['goal'].value;
    const frequency = form.elements['frequency'].value;
    const time = form.elements['time'].value;
    const services = [...form.elements['services']].filter(service => service.checked).map(service => service.value);
    const budget = form.elements['budget'].value;

    // Example logic for determining the best subscription
    let recommendation = '';

    if (goal === 'weight_loss' && frequency === 'daily' && budget === 'high') {
        recommendation = 'Premium Plan';
    } else if (goal === 'general_fitness' && budget === 'medium') {
        recommendation = 'Standard Plan';
    } else {
        recommendation = 'Basic Plan';
    }

    // Display the result
    resultDiv.innerText = `We recommend the ${recommendation} for you!`;
}

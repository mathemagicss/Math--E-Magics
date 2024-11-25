document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const input = form.querySelector('input[type="text"]');
            const answer = parseInt(input.value);
            const correctAnswer = parseInt(input.dataset.correctAnswer);

            if (answer === correctAnswer) {
                alert('Correct!');
            } else {
                alert('Incorrect. Try again.');
            }
        });
    });
});

function checkAnswer(questionId, correctAnswer) {
    const input = document.getElementById(questionId);
    const answer = parseInt(input.value);

    if (answer === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect. Try again.');
    }
}

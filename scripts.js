document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const inputs = form.querySelectorAll('input[type="text"]');
            let allCorrect = true;

            inputs.forEach(input => {
                const answer = input.value;
                const correctAnswer = input.dataset.correctAnswer;

                if (answer === correctAnswer) {
                    input.nextElementSibling.textContent = 'Correct!';
                } else {
                    input.nextElementSibling.textContent = 'Incorrect. Try again.';
                    allCorrect = false;
                }
            });

            if (allCorrect) {
                alert('All answers are correct! - Math-E-Magics');
            } else {
                alert('Some answers are incorrect. Please try again. - Math-E-Magics');
            }
        });
    });
});

function checkAnswer(questionId, correctAnswer) {
    const input = document.getElementById(questionId);
    const answer = input.value;

    if (answer === correctAnswer) {
        alert('Correct! - Math-E-Magics');
    } else {
        alert('Incorrect. Try again. - Math-E-Magics');
    }
}

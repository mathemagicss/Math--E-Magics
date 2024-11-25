document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const inputs = form.querySelectorAll('input[type="text"]');
            let allCorrect = true;

            inputs.forEach(input => {
                const answer = parseInt(input.value);
                const correctAnswer = parseInt(input.dataset.correctAnswer);

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
    const answer = parseInt(input.value);

    if (answer === correctAnswer) {
        alert('Correct! - Math-E-Magics');
    } else {
        alert('Incorrect. Try again. - Math-E-Magics');
    }
}

// Update the checkAnswer function to handle the new questions
function checkAnswer(questionId, correctAnswer) {
    const input = document.getElementById(questionId);
    const answer = parseInt(input.value);

    if (answer === correctAnswer) {
        alert('Correct! - Math-E-Magics');
    } else {
        alert('Incorrect. Try again. - Math-E-Magics');
    }
}

// Ensure the correct answers for the new questions are checked
function checkAnswer(questionId, correctAnswer) {
    const input = document.getElementById(questionId);
    const answer = parseInt(input.value);

    if (answer === correctAnswer) {
        alert('Correct! - Math-E-Magics');
    } else {
        alert('Incorrect. Try again. - Math-E-Magics');
    }
}

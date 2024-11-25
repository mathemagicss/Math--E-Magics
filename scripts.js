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
                alert('All answers are correct!');
            } else {
                alert('Some answers are incorrect. Please try again.');
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

// Update the checkAnswer function to handle the new questions
function checkAnswer(questionId, correctAnswer) {
    const input = document.getElementById(questionId);
    const answer = parseInt(input.value);

    if (answer === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect. Try again.');
    }
}

// Ensure the correct answers for the new questions are checked
function checkAnswer(questionId, correctAnswer) {
    const input = document.getElementById(questionId);
    const answer = parseInt(input.value);

    if (answer === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect. Try again.');
    }
}

const cardAdviceId = document.querySelector('.card-advice__id');
const cardAdviceText = document.querySelector('.card-advice__text');
const cardAdviceBtn = document.querySelector('.card-advice__btn');

cardAdviceBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        cardAdviceId.textContent = data.slip.id;
        cardAdviceText.textContent = data.slip.advice;
    } catch (err) {
        console.error('Error:', err.message);
    }
});
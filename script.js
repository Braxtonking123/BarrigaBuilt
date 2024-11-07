document.querySelectorAll('.FAQ-boxes-top').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;

        // Toggle the display of the answer
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'flex';
        } else {
            answer.style.display = 'none';
        }
    });
});

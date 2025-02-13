document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
        alert('Вы кликнули по ссылке: ' + link.textContent);
    });
});

const dropdowns = document.querySelectorAll('.dropdown');

Array.from(dropdowns).forEach((dropdown) => {
    const button = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');

    button.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });

    const items = dropdown.querySelectorAll('.dropdown__item');

    Array.from(items).forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const value = item.textContent.trim();
            button.textContent = value;
            list.classList.remove('dropdown__list_active');
        });
    });
});
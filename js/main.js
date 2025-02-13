let open_burger = document.querySelector('.burger-button');

open_burger.addEventListener('click', () => {
    mobileOverlay.showModal()
    document.body.classList.add('lock');
})


let close_burger = document.querySelector('.mobile-overlay');

close_burger.addEventListener('click', () => {
    mobileOverlay.close()
    document.body.classList.remove('lock');
})
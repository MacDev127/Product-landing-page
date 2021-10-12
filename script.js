const navbarToggler = document.querySelector('.navbar_top_toggler');
const navbarCollapse = document.querySelector('.navbar_collapse');

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('change');
    navbarCollapse.classList.toggle('show_nav');
});
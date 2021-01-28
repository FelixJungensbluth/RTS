const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav--links');
    const navLinks = document.querySelectorAll('nav--links li');
    const accountManagementContainer = document.querySelector('.account--management--container');
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        accountManagementContainer.classList.toggle('side-nav-active');
    });
}

navSlide();
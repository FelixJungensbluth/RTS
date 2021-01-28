var closeProfile = () => {
const profileClose = document.querySelector('.profile--overlay--close');
const profileOverlay = document.querySelector('.profile--container');
const profileOpen = document.querySelector('.profile--button');
profileClose.addEventListener('click',() => {
    
    profileOverlay.classList.toggle('profile-toggle');
});
profileOpen.addEventListener('click',() => {
    
    profileOverlay.classList.toggle('profile-toggle');
});
}
closeProfile();
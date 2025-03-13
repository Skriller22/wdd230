const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navigation.classList.toggle('open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 840) {
        hamburger.classList.add('open');
        navigation.classList.add('open');
    } else {
        hamburger.classList.remove('open');
        navigation.classList.remove('open');
    }
});

if (window.innerWidth >= 840) {
    hamburger.classList.add('open');
    navigation.classList.add('open');
}
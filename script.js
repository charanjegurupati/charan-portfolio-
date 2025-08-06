window.addEventListener('scroll', function() {
const header = document.querySelector('header');
if (window.scrollY > 50) {
header.style.backgroundColor = '#005fa3';
} else {
header.style.backgroundColor = '#0077cc';
}
});
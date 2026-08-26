const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', function() {
    navList.classList.toggle('is-open');
});

const navLinks = document.querySelectorAll('.navLink');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navList.classList.remove('is-open')
    })
})

const taglines = [
    'I build things for the web',
    'I am learning javascript',
    'I am a Kokoodi Builder'
];

const taglineElement = document.getElementById('heroTagline');
let taglineIndex = 0;
let letterIndex = 0;

function typeTagline() {
    const currentTagline = taglines[taglineIndex]

    taglineElement.textContent = currentTagline.slice(0, letterIndex)
    letterIndex = letterIndex + 1;

    if (letterIndex > currentTagline.length) {
        letterIndex = 0;
        taglineIndex = (taglineIndex + 1) % taglines.length;
        setTimeout(typeTagline, 1500);
        return;
    }
    setTimeout(typeTagline, 90);
}

typeTagline()
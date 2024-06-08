let text = document.getElementById('text');
let aboutme = document.getElementById('aboutme');
let skills = document.getElementById('skills');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.top = value * 0.8 + 'px';
    text.style.top = value * .01 + 'px';
    if (value > 150) { 
        text.style.opacity = '0';   
    } else {
        text.style.opacity = '1';
    }
    if (value > 270) {
        text.style.display = 'none'
    } else {
        text.style.display = 'block'
    }
    
    aboutme.style.top = value * 0.8 + 'px';
    aboutme.style.top = value * .01 + 'px';
    if (value > 250) {
        aboutme.style.opacity = '1';
    } else {
        aboutme.style.opacity = '0';
    }

    skills.style.top = value * 0.8 + 'px';
    skills.style.top = value * .01 + 'px';
    if (value > 450) {
        skills.style.opacity = '1';
    } else {
        skills.style.opacity = '0';
    }
});
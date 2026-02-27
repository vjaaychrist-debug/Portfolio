// Typing Animation
const textArray = [
    "Professional Luau Developer",
    "Roblox Systems Engineer",
    "Python Automation Developer"
];

let typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 60);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll Reveal
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);

// Commission Counter Animation
let counter = document.getElementById("commissionCounter");
let target = 40;
let count = 0;

function updateCounter() {
    if (count < target) {
        count++;
        counter.innerText = count + "+";
        setTimeout(updateCounter, 30);
    }
}
updateCounter();
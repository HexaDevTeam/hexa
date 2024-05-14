const texts = [
  "HexaDev Team To The Top!",
  "Build from zero to one hundred",
  "We're the developer",
];

const typingSpeed = 100; // Kecepatan typing dalam milidetik
const delay = 1500; // Waktu jeda sebelum looping ulang dalam milidetik

const typingElement = document.getElementById("typing-effect");

let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    typingElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delay);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, typingSpeed / 2);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, typingSpeed / 2);
  }
}

typeText();

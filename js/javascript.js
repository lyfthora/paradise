const typewriterText = document.querySelector(".type");
const phrases = ["\u00A0 © paradise.pw 2025", "\u00A0 one step beyond"];

let phraseIndex = 0;
let characterIndex = 0;

function type() {
  if (characterIndex < phrases[phraseIndex].length) {
    typewriterText.textContent += phrases[phraseIndex][characterIndex];
    characterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (characterIndex > 1) {
    typewriterText.textContent = phrases[phraseIndex].substring(
      0,
      characterIndex - 1
    );
    characterIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    characterIndex = 0;
    setTimeout(type, 250);
  }
}

type();

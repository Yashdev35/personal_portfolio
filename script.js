document.addEventListener('DOMContentLoaded', function () {
    // Typing animation for the header subtitle
    const typingElement = document.querySelector('.typing');
    const phrases = ['Android Developer', 'ML Enthusiast', 'Tech Explorer'];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentText = '';
    
    function type() {
      if (letterIndex < phrases[phraseIndex].length) {
        currentText += phrases[phraseIndex][letterIndex];
        typingElement.textContent = currentText;
        letterIndex++;
        setTimeout(type, 150);
      } else {
        setTimeout(erase, 2000);
      }
    }
    
    function erase() {
      if (letterIndex > 0) {
        currentText = currentText.slice(0, -1);
        typingElement.textContent = currentText;
        letterIndex--;
        setTimeout(erase, 100);
      } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
      }
    }
    
    type();
  });
  
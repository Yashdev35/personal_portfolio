document.addEventListener('DOMContentLoaded', function () {
    const typingElement = document.querySelector('.typing');
    const phrases = ['Android Developer', 'ML Enthusiast', 'Tech Explorer'];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentText = '';
    const scrollableSection = document.querySelector('.scrollable-section');
    let isDown = false;
    let startX;
    let scrollLeft;
    const cards = document.querySelectorAll('.card');
    
    scrollableSection.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollableSection.classList.add('active');
      startX = e.pageX - scrollableSection.offsetLeft;
      scrollLeft = scrollableSection.scrollLeft;
    });
  
    scrollableSection.addEventListener('mouseleave', () => {
      isDown = false;
      scrollableSection.classList.remove('active');
    });
  
    scrollableSection.addEventListener('mouseup', () => {
      isDown = false;
      scrollableSection.classList.remove('active');
    });
  
    scrollableSection.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollableSection.offsetLeft;
      const walk = (x - startX) * 2;
      scrollableSection.scrollLeft = scrollLeft - walk;
    });
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
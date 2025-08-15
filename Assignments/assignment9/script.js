
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');

    const maxLength = 100;

    textInput.addEventListener('keyup', () => {

      const currentLength = textInput.value.length;
      
         const remaining = maxLength - currentLength;
      
     
      charCount.textContent = remaining;
      
   
      if (remaining < 0) {
        charCount.classList.add('over-limit');
      } else {
        charCount.classList.remove('over-limit');
      }
    });

    charCount.textContent = maxLength;
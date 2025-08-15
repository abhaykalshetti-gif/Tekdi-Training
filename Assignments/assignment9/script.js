
    // Get references to the HTML elements
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');

    // Define the character limit
    const maxLength = 100;

    // Add a keyup event listener to the textarea
    textInput.addEventListener('keyup', () => {
      // Get the current number of characters
      const currentLength = textInput.value.length;
      
      // Calculate the remaining characters
      const remaining = maxLength - currentLength;
      
      // Update the counter text
      charCount.textContent = remaining;
      
      // Check if the limit has been exceeded
      if (remaining < 0) {
        charCount.classList.add('over-limit');
      } else {
        charCount.classList.remove('over-limit');
      }
    });

    // Initialize the counter on page load
    charCount.textContent = maxLength;
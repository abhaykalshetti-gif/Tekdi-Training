    const accordion = document.querySelector('.accordion');

    // Add a single event listener to the parent container (event delegation)
    accordion.addEventListener('click', (event) => {
      // Find the closest question button to the clicked element
      const question = event.target.closest('.accordion-question');
      
      // If a question button was clicked
      if (question) {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all other open answers
        closeAllAnswers();
        
        // If the clicked question was not already active, open it
        if (!isActive) {
          question.classList.add('active');
          answer.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
          answer.hidden = false;
        }
      }
    });

    // Function to close all accordion items
    function closeAllAnswers() {
      const allQuestions = document.querySelectorAll('.accordion-question');
      const allAnswers = document.querySelectorAll('.accordion-answer');
      
      allQuestions.forEach(q => {
        q.classList.remove('active');
        q.setAttribute('aria-expanded', 'false');
      });
      
      allAnswers.forEach(a => {
        a.classList.remove('open');
        a.hidden = true;
      });
    }
  
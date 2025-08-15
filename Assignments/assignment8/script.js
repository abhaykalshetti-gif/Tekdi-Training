    const accordion = document.querySelector('.accordion');

     accordion.addEventListener('click', (event) => {
   
      const question = event.target.closest('.accordion-question');
       
      if (question) {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
    
        closeAllAnswers();
        
        
        if (!isActive) {
          question.classList.add('active');
          answer.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
          answer.hidden = false;
        }
      }
    });


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
  
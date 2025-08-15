
        // Use window.onload to ensure the DOM is fully loaded before running the script
        window.onload = function() {

            // --- DOM Documents & Elements ---
            const firstParagraph = document.getElementById('first-paragraph');
            const changeTextButton = document.getElementById('change-text-button');
            const addElementButton = document.getElementById('add-element-button');
            const demoContainer = document.getElementById('demo-element-container');

            // Add an event listener to the "Change Text" button
            changeTextButton.addEventListener('click', () => {
                // Change the text content of the first paragraph
                firstParagraph.textContent = "The text has been changed using JavaScript!";
                firstParagraph.classList.add('font-bold', 'text-yellow-400');
            });

            // Add an event listener to the "Add New Element" button
            addElementButton.addEventListener('click', () => {
                // Create a new paragraph element
                const newParagraph = document.createElement('p');
                newParagraph.textContent = "This is a new element created with JavaScript!";
                newParagraph.classList.add('text-green-400', 'italic', 'text-center');

                // Append the new element to the container
                demoContainer.appendChild(newParagraph);
            });

            // --- DOM HTML ---
            const htmlParagraph = document.getElementById('html-paragraph');
            const changeHtmlButton = document.getElementById('change-html-button');

            changeHtmlButton.addEventListener('click', () => {
                // Use innerHTML to change the content, including new HTML tags
                htmlParagraph.innerHTML = `The new content is <strong class="text-purple-400">bold and styled!</strong>`;
            });

            // --- DOM FORMS ---
            const contactForm = document.getElementById('contact-form');
            const usernameInput = document.getElementById('username');
            const formMessage = document.getElementById('form-message');

            // Add an event listener for the form submission
            contactForm.addEventListener('submit', (event) => {
                // Prevent the default form submission behavior (reloading the page)
                event.preventDefault();

                // Get the value from the input field
                const username = usernameInput.value;

                // Check if the input is not empty
                if (username.trim() !== '') {
                    // Update the message for the user
                    formMessage.textContent = `Thank you, ${username}! Form submitted.`;
                    formMessage.classList.remove('text-red-500');
                    formMessage.classList.add('text-green-400');
                } else {
                    formMessage.textContent = "Please enter your name!";
                    formMessage.classList.remove('text-green-400');
                    formMessage.classList.add('text-red-500');
                }
            });
        };
    
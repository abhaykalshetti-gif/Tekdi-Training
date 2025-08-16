
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

            // --- DOM CSS ---
            const cssParagraph = document.getElementById('css-paragraph');
            const changeStyleButton = document.getElementById('change-style-button');

            changeStyleButton.addEventListener('click', () => {
                // Change multiple CSS properties using the style property
                cssParagraph.style.color = '#fde047'; // yellow-300
                cssParagraph.style.fontSize = '1.25rem'; // text-xl
                cssParagraph.style.fontWeight = 'bold';
                cssParagraph.style.border = '2px solid #fde047';
                cssParagraph.style.padding = '1rem';
                cssParagraph.textContent = "The style has been changed!";
            });

            // --- DOM Events & Event Listener ---
            const eventButton = document.getElementById('event-button');
            const eventMessage = document.getElementById('event-message');

            // Add a click event listener
            eventButton.addEventListener('click', () => {
                eventMessage.textContent = "You clicked the button! The event was handled.";
                eventMessage.classList.add('font-bold', 'text-cyan-400');
            });
            // You can also listen for other events like 'mouseover', 'mouseout', 'keydown', etc.

            // --- DOM Navigation ---
            const parentContainer = document.getElementById('parent-container');
            const navMessage = document.getElementById('nav-message');
            const navButton = document.getElementById('nav-button');

            navButton.addEventListener('click', () => {
                // Get the first child of the parent
                const firstChild = parentContainer.firstElementChild;
                const secondChild = firstChild.nextElementSibling;
                const parentOfFirstChild = firstChild.parentElement;
                
                navMessage.innerHTML = `The parent is "${parentOfFirstChild.id}".<br>The first child is "${firstChild.textContent}".<br>The next sibling is "${secondChild.textContent}".`;
            });

            // --- DOM Collections and NodeLists ---
            const highlightButton = document.getElementById('highlight-button');
            const listItems = document.querySelectorAll('.item-list');
            const listMessage = document.getElementById('list-message');

            highlightButton.addEventListener('click', () => {
                // Iterate over the NodeList to modify each element
                listItems.forEach((item, index) => {
                    item.style.backgroundColor = '#4c51bf'; // bg-indigo-700
                    item.style.color = '#f7fafc'; // text-gray-100
                    item.textContent = `Highlighted Item ${index + 1}`;
                });
                listMessage.textContent = "All items have been highlighted!";
            });
            
            // --- More DOM Examples: To-Do List ---
            const todoInput = document.getElementById('todo-input');
            const addTodoButton = document.getElementById('add-todo-button');
            const todoList = document.getElementById('todo-list');

            addTodoButton.addEventListener('click', () => {
                const taskText = todoInput.value.trim();

                if (taskText !== "") {
                    // Create a new list item
                    const listItem = document.createElement('li');
                    listItem.className = 'flex items-center justify-between p-2 rounded-lg bg-gray-700 text-white cursor-pointer hover:bg-gray-600 transition-colors';

                    // Create the task text span
                    const taskSpan = document.createElement('span');
                    taskSpan.textContent = taskText;

                    // Create a delete button
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'x';
                    deleteButton.className = 'text-red-400 hover:text-red-500 font-bold p-1 rounded-full';

                    // Add a click event to toggle the "completed" class
                    listItem.addEventListener('click', () => {
                        listItem.classList.toggle('completed');
                    });

                    // Add a click event to the delete button to remove the item
                    deleteButton.addEventListener('click', (e) => {
                        // Stop the parent li's click event from firing
                        e.stopPropagation();
                        listItem.remove();
                    });

                    // Append the span and button to the list item
                    listItem.appendChild(taskSpan);
                    listItem.appendChild(deleteButton);

                    // Add the new list item to the to-do list
                    todoList.appendChild(listItem);

                    // Clear the input field
                    todoInput.value = '';
                }
            });
        };
   
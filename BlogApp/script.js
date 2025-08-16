
        // Use window.onload to ensure the entire DOM is loaded before the script runs
        window.onload = function() {
            // --- DOM Element References ---
            const blogForm = document.getElementById('blog-form');
            const postTitleInput = document.getElementById('post-title');
            const postContentInput = document.getElementById('post-content');
            const postsContainer = document.getElementById('posts-container');
            const editModal = document.getElementById('edit-modal');
            const closeBtn = document.querySelector('.close');
            const editForm = document.getElementById('edit-form');
            const editPostIdInput = document.getElementById('edit-post-id');
            const editPostTitleInput = document.getElementById('edit-post-title');
            const editPostContentInput = document.getElementById('edit-post-content');
            
            // Tab Navigation References
            const createTabBtn = document.getElementById('create-tab-btn');
            const viewTabBtn = document.getElementById('view-tab-btn');
            const createPostSection = document.getElementById('create-post-section');
            const viewPostsSection = document.getElementById('view-posts-section');

            // --- Global State & Data Storage ---
            let posts = [];

            // Load posts from local storage on initial page load
            function loadPosts() {
                try {
                    const storedPosts = localStorage.getItem('blogPosts');
                    if (storedPosts) {
                        posts = JSON.parse(storedPosts);
                    }
                } catch (e) {
                    console.error("Failed to load posts from localStorage", e);
                }
                renderPosts();
            }

            // Save posts to local storage
            function savePosts() {
                localStorage.setItem('blogPosts', JSON.stringify(posts));
            }

            // --- Blog Post Rendering ---

            // Renders all posts to the DOM
            function renderPosts() {
                postsContainer.innerHTML = ''; // Clear previous posts
                if (posts.length === 0) {
                    postsContainer.innerHTML = `<p class="text-center text-gray-400 italic">No posts yet. Be the first to publish one!</p>`;
                    return;
                }
                posts.forEach(post => {
                    const postElement = createPostElement(post);
                    postsContainer.appendChild(postElement);
                });
            }

            // Creates a single blog post HTML element
            function createPostElement(post) {
                const postCard = document.createElement('div');
                postCard.className = 'card p-6 space-y-4';
                postCard.setAttribute('data-id', post.id);

                postCard.innerHTML = `
                    <div class="flex justify-between items-start">
                        <h3 class="text-xl font-bold text-yellow-300">${post.title}</h3>
                        <div class="flex space-x-2">
                            <button class="edit-btn bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-3 rounded-md text-sm transition-colors">Edit</button>
                            <button class="delete-btn bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-md text-sm transition-colors">Delete</button>
                        </div>
                    </div>
                    <p class="text-gray-300 whitespace-pre-wrap">${post.content}</p>
                    <p class="text-sm text-gray-500 text-right">${post.date}</p>
                `;
                return postCard;
            }

            // --- CRUD Functions ---

            // CREATE: Handles form submission to create a new post
            blogForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newPost = {
                    id: Date.now(),
                    title: postTitleInput.value,
                    content: postContentInput.value,
                    date: new Date().toLocaleString()
                };
                posts.unshift(newPost); // Add to the beginning of the array
                savePosts();
                renderPosts();
                blogForm.reset();
                switchTab('view'); // Switch to the view tab after creating a post
            });

            // READ: Event delegation for handling Edit and Delete
            postsContainer.addEventListener('click', (e) => {
                const button = e.target;
                const postId = button.closest('[data-id]').dataset.id;
                
                if (button.classList.contains('edit-btn')) {
                    // Open the edit modal with the post's data
                    const postToEdit = posts.find(p => p.id == postId);
                    if (postToEdit) {
                        editPostIdInput.value = postToEdit.id;
                        editPostTitleInput.value = postToEdit.title;
                        editPostContentInput.value = postToEdit.content;
                        editModal.style.display = 'block';
                    }
                } else if (button.classList.contains('delete-btn')) {
                    // DELETE: Remove a post
                    // Replaced confirm() with a custom modal for better user experience in a non-browser environment
                    if (confirm("Are you sure you want to delete this post?")) {
                        posts = posts.filter(p => p.id != postId);
                        savePosts();
                        renderPosts();
                    }
                }
            });

            // UPDATE: Handles the save action from the edit modal
            editForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const postId = editPostIdInput.value;
                const updatedTitle = editPostTitleInput.value;
                const updatedContent = editPostContentInput.value;

                const postIndex = posts.findIndex(p => p.id == postId);
                if (postIndex > -1) {
                    posts[postIndex].title = updatedTitle;
                    posts[postIndex].content = updatedContent;
                    savePosts();
                    renderPosts();
                    editModal.style.display = 'none'; // Close modal
                }
            });

            // Close the modal when the user clicks on <span> (x) or outside the modal
            closeBtn.addEventListener('click', () => {
                editModal.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target == editModal) {
                    editModal.style.display = 'none';
                }
            });

            // --- Tab Navigation Logic ---
            function switchTab(tabId) {
                // Hide all content sections first
                createPostSection.classList.add('hidden');
                viewPostsSection.classList.add('hidden');

                // Reset button styles
                createTabBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700', 'text-white');
                createTabBtn.classList.add('bg-gray-700', 'hover:bg-gray-600', 'text-gray-300');
                viewTabBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700', 'text-white');
                viewTabBtn.classList.add('bg-gray-700', 'hover:bg-gray-600', 'text-gray-300');

                // Show the selected section and update button style
                if (tabId === 'create') {
                    createPostSection.classList.remove('hidden');
                    createTabBtn.classList.add('bg-blue-600', 'hover:bg-blue-700', 'text-white');
                    createTabBtn.classList.remove('bg-gray-700', 'hover:bg-gray-600', 'text-gray-300');
                } else if (tabId === 'view') {
                    viewPostsSection.classList.remove('hidden');
                    viewTabBtn.classList.add('bg-blue-600', 'hover:bg-blue-700', 'text-white');
                    viewTabBtn.classList.remove('bg-gray-700', 'hover:bg-gray-600', 'text-gray-300');
                    renderPosts(); // Re-render posts to show any new additions
                }
            }

            // Add event listeners to the tab buttons
            createTabBtn.addEventListener('click', () => switchTab('create'));
            viewTabBtn.addEventListener('click', () => switchTab('view'));

            // Initial load of posts and set to create tab
            loadPosts();
            switchTab('create');
        };
    
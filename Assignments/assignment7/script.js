const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️'; // The trash can emoji remains
    deleteBtn.className = 'delete-btn';
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = '';
  }
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const listItem = event.target.closest('li');
    listItem.remove();
  }
});
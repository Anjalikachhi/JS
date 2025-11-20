const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">✖</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('deleteBtn')) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.classList.toggle('completed');
  }
});
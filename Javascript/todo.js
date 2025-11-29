// app.js
class Task {
  constructor(title, priority) {
    this.id = Date.now().toString();
    this.title = title;
    this.priority = priority;
    this.completed = false;
  }
}

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span>${task.title}</span>
      <span class="priority ${task.priority}">${task.priority}</span>
      <button>✓</button>
      <button>✗</button>
    `;
    li.querySelector("button").onclick = () => {
      task.completed = !task.completed; save(); render();
    };
    li.querySelectorAll("button")[1].onclick = () => {
      tasks = tasks.filter(t => t.id !== task.id); save(); render();
    };
    taskList.appendChild(li);
  });
}

taskForm.onsubmit = e => {
  e.preventDefault();
  tasks.push(new Task(taskInput.value, prioritySelect.value));
  taskInput.value = "";
  save(); render();
};

clearBtn.onclick = () => {
  tasks = tasks.filter(t => !t.completed);
  save(); render();
};

render();
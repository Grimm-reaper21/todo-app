document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function renderTasks() {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.onclick = () => {
        tasks.splice(index, 1);
        saveAndRender();
      };

      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = input.value.trim();
    if (newTask !== "") {
      tasks.push(newTask);
      input.value = "";
      saveAndRender();
    }
  });

  renderTasks();
});
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const form = document.getElementById("create-task-form");
  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Event listener to form
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let taskDescription = ev.target[0].value;
    taskList.createNewTask(taskDescription);
    ev.target.reset();
    renderApp();
  })

  listContainer.addEventListener('click', (ev) => {
    if (ev.target.nodeName === "BUTTON") {
      taskList.deleteTask(ev.target.dataset.description);
      renderApp();
    }
  })

  renderApp()
});

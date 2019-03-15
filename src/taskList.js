class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    const newTask = new TaskListItem(description);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
}

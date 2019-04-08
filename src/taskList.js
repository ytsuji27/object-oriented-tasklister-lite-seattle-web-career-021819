class TaskList {

  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    const newTask = new TaskListItem(description);
    this.tasks.push(newTask);
  }

  render() {
    return (
      `
      <ul id="tasks">
        <h2>My Todos</h2>
        ${this.tasks.map((task) => task.render()).join("")}
      </ul>
      `
    )
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
  //
  // render = (li) => {
  //   const h2 = document.createElement('h2');
  //   h2.innerText = "My Todos";
  //
  //   if (li === undefined) {
  //     return "<h2>My Todos</h2>";
  //   } else {
  //
  //   }
  // }

}

class TaskListItem {

  constructor(description) {
    this.description = description;
  }

  render() {
    return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
      `;
  }

  // Returns <li> based on description
  // renderItem = (taskDescription) => {
  //   let li = document.createElement('li');
  //   li.innerText = taskDescription;
  //   let button = document.createElement('button');
  //   button.setAttribute("data-description", taskDescription);
  //   button.innerText = "X";
  //   li.appendChild(button);
  //   return li;
  // }

}

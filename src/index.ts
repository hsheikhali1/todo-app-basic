const todoList = document.querySelector<HTMLInputElement>(".todo-list__items");
const todoInput = document.querySelector<HTMLInputElement>("#todo-list__input");
const todoButton = document.querySelector(".todo-list__button");

function addTodoItem(): void {
  const todoValue = todoInput?.value;

  if (todoValue === "" || todoValue === undefined) {
    console.log("value cannot be empty.");

    return;
  }

  const todoItem = `<li><div>${todoValue}<button class="todo-item__remove-button">Remove</button></div></li>`;

  if (!todoList) {
    console.log("couldn't find todo list.");
    return;
  }

  todoList.innerHTML += todoItem;
}

todoButton?.addEventListener("click", (evt) => {
  evt.preventDefault();

  addTodoItem();
});

// Using the concept of bubbling via eventhandlers
// and buttons to make sure I am picking the right
// element to delete
todoList?.addEventListener("click", (evt) => {
  const target = evt.target as HTMLElement;

  if (target.classList.contains("todo-item__remove-button")) {
    const todoItem = target.parentElement?.parentNode;

    if (!todoItem) {
      console.log("could not find a child to remove");
      return;
    }

    todoList.removeChild(todoItem);
  }
});

const todoform = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todolist = document.querySelector(".todo-list");

todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodotext = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = `
    <span class="text">${newTodotext}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;

  newLi.innerHTML = newLiInnerHTML;
  todolist.append(newLi);

  todoInput.value = "";
});

todolist.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const lispan = e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration = "line-through";
  }

  if (e.target.classList.contains("remove")) {
    const targetLi = e.target.parentNode.parentNode;
    targetLi.remove();
  }
});

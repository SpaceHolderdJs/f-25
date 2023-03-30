const input = document.querySelector("#todo-creation");
const button = document.querySelector("#create-todo-button");
const output = document.querySelector("#output");
const usersOutput = document.querySelector("#users-output");
const clearCurrentUserButton = document.querySelector("#clear-current-user");
const searchTodoInput = document.querySelector("#todo-search");

const isLocalStorageTodosExists = localStorage.getItem("todos");

let todos = isLocalStorageTodosExists
  ? JSON.parse(isLocalStorageTodosExists)
  : [];

let users = [];
let currentUser = undefined;

renderTodos(todos);

button.onclick = () => {
  const todo = {
    text: input.value,
    done: false,
  };

  input.value = "";

  todos.push(todo);

  renderTodos(todos);
};

function renderTodos(todosToRender) {
  localStorage.setItem("todos", JSON.stringify(todos));

  output.innerHTML = "";
  todosToRender.forEach((todo, i) => {
    output.innerHTML += `
            <div class="todo ${todo.done && "done"}">
                <div>
                    <span>${i + 1}.</span>
                    <input type="checkbox" ${
                      todo.done && "checked"
                    } class="todo-checkbox" />
                    <span>${todo.text}</span>
                </div>
                <button class="delete-todo">Delete</button>
            </div>
        `;
  });

  const checkboxes = [...document.querySelectorAll(".todo-checkbox")];

  checkboxes.forEach((checkbox, i) => {
    checkbox.onchange = () => {
      const todo = todos[i];
      changeTodo(todo.text, !todo.done);
    };
  });

  const deleteButtons = [...document.querySelectorAll(".delete-todo")];

  deleteButtons.forEach((button, i) => {
    button.onclick = () => {
      const todo = todos[i];
      deleteTodo(todo.text);
    };
  });
}

function changeTodo(text, newDone) {
  todos = todos.map((todo) => {
    if (text === todo.text) {
      return { text, done: newDone };
    }
    return todo;
  });

  renderTodos(
    currentUser ? todos.filter((todo) => todo.userId === currentUser.id) : todos
  );
}

function deleteTodo(text) {
  todos = todos.filter((todo) => todo.text !== text);
  renderTodos(
    currentUser ? todos.filter((todo) => todo.userId === currentUser.id) : todos
  );
}

function searchTodo(value) {
  const filteredTodos = currentUser
    ? todos.filter(
        (todo) => todo.text.includes(value) && todo.userId === currentUser.id
      )
    : todos.filter((todo) => todo.text.includes(value));

  renderTodos(filteredTodos);
}

function getServerTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todosFromServer) => {
      const tranformedTodos = todosFromServer.map((todo) => {
        return {
          text: todo.title,
          done: todo.completed,
          userId: todo.userId,
          id: todo.id,
        };
      });

      console.log(tranformedTodos, "todos");

      todos = tranformedTodos;
      renderTodos(todos);
    });
}

getServerTodos();

function getServerUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((usersFromServer) => {
      console.log(usersFromServer, "users");

      users = usersFromServer;
      renderUsers();
    });
}

getServerUsers();

function renderUsers() {
  usersOutput.innerHTML = "";

  users.forEach((user) => {
    usersOutput.innerHTML += `
            <button class="user-todos-button">${user.name}</button>
        `;
  });

  const userButtons = [...document.querySelectorAll(".user-todos-button")];

  userButtons.forEach((button, i) => {
    button.onclick = (event) => {
      searchTodoInput.value = "";
      currentUser = users[i];
      clearCurrentUserButton.disabled = false;

      userButtons.forEach((btn) => btn.classList.remove("active-user-button"));
      event.target.classList.add("active-user-button");

      const todosOfCurrentUser = todos.filter(
        (todo) => todo.userId === currentUser.id
      );
      renderTodos(todosOfCurrentUser);
    };
  });
}

clearCurrentUserButton.disabled = true;

clearCurrentUserButton.onclick = () => {
  currentUser = undefined;
  clearCurrentUserButton.disabled = true;
  renderTodos(todos);
};

searchTodoInput.oninput = () => {
  console.log(searchTodoInput.value);
  searchTodo(searchTodoInput.value);
};

const input = document.querySelector("#todo-creation");
const button = document.querySelector("#create-todo-button");
const output = document.querySelector("#output");
const usersOutput = document.querySelector("#users-output");
const clearCurrentUserButton = document.querySelector("#clear-current-user");
const searchTodoInput = document.querySelector("#todo-search");
const scrollTopButton = document.querySelector("#scroll-top-button");
const clearInputButton = document.querySelector("#clear-todo-search");

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
                    <input id="${todo.id}" type="checkbox" ${
                      todo.done && "checked"
                    } class="todo-checkbox" />
                    <span>${todo.text}</span>
                </div>
                <button id="${todo.id}" class="delete-todo">Delete</button>
            </div>
        `;
  });

  const checkboxes = [...document.querySelectorAll(".todo-checkbox")];

  checkboxes.forEach((checkbox) => {
    checkbox.onchange = () => {
      const todo = todos.find((todo) => todo.id === +checkbox.id);
      changeTodo(todo.id, !todo.done);
    };
  });

  const deleteButtons = [...document.querySelectorAll(".delete-todo")];

  deleteButtons.forEach((button) => {
    button.onclick = () => {
      const todo = todos.find((todo) => todo.id === +button.id);
      deleteTodo(todo.text);
    };
  });
}

function changeTodo(id, newDone) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: newDone };
    }
    return todo;
  });

  renderTodos(
    currentUser ? todos.filter((todo) => todo.userId === currentUser.id) : todos
  );
}

function deleteTodo(text) {
  todos = todos.filter((todo) => todo.text !== text);
  console.log(todos, "changed todos");
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

  const userButtons = [...document.querySelectorAll(".user-todos-button")];
  userButtons.forEach((btn) => btn.classList.remove("active-user-button"));

  renderTodos(todos);
};

searchTodoInput.oninput = () => {
  console.log(searchTodoInput.value);
  searchTodo(searchTodoInput.value);
};

scrollTopButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

clearInputButton.onclick = () => {
  searchTodoInput.value = "";
  const todosToRender = currentUser ? todos.filter((todo) => todo.userId === currentUser.id) : todos;
  renderTodos(todosToRender);
}


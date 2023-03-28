const input = document.querySelector("#todo-creation");
const button = document.querySelector("#create-todo-button");
const output = document.querySelector("#output");

let todos = [
    {
        text: "New text",
        done: false
    }
];

renderTodos(todos);

button.onclick = () => {
    const todo = {
        text: input.value,
        done: false
    }

    input.value = "";
    
    todos.push(todo);

    renderTodos(todos);
}

function renderTodos (todosToRender) {
    output.innerHTML = "";
    todosToRender.forEach((todo, i) => {
        output.innerHTML += `
            <div class="todo ${todo.done && "done"}">
                <span>${i + 1}.</span>
                <input type="checkbox" ${todo.done && "checked"} class="todo-checkbox" />
                <span>${todo.text}</span>
                <button class="delete-todo">Delete</button>
            </div>
        `
    });

    const checkboxes = [...document.querySelectorAll(".todo-checkbox")];

    checkboxes.forEach((checkbox, i) => {
        checkbox.onchange = () => {
            const todo = todos[i];
            changeTodo(todo.text, !todo.done);
        }
    });

    const deleteButtons = [...document.querySelectorAll(".delete-todo")];

    deleteButtons.forEach((button, i) => {
        button.onclick = () => {
            const todo = todos[i];
            deleteTodo(todo.text);
        }
    });
}

function changeTodo (text, newDone) {
    todos = todos.map((todo) => {
        if (text === todo.text) {
            return { text, done: newDone }
        }
        return todo;
    });

    renderTodos(todos);
}

function deleteTodo (text) {
  todos = todos.filter((todo) => todo.text !== text);
  renderTodos(todos);
}
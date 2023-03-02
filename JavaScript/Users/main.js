const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const createButton = document.querySelector("#create");
const usersSection = document.querySelector("#users-section");

let users = [];

const deleteUser = (indexOfUser) => {
    users = users.filter((el, i) => i !== indexOfUser);
    renderUsers();
}

function renderUsers () {
    
    usersSection.innerHTML = ""; 

    const usersContent = users.map((user) => `<div class="user-card">
        <p>${user.name}</p>
        <span>${user.age}</span>
        <button class="delete-user-button">Delete</button>
    </div>`);

     usersContent.forEach((userLayout) => {
        usersSection.innerHTML += userLayout;
     });

     const deleteButtons = [...document.querySelectorAll(".delete-user-button")];

     deleteButtons.forEach((button, i) => {
        button.onclick = () => deleteUser(i);
     });
}

createButton.onclick = () => {
  const name = nameInput.value;
  const age = +ageInput.value;

  const user = {name: name, age: age};

  users.push(user);

  nameInput.value = "";
  ageInput.value = "";

  renderUsers();
}


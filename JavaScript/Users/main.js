const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const cityInput = document.querySelector("#city");
const createButton = document.querySelector("#create");
const usersSection = document.querySelector("#users-section");
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const cancelSearchButton = document.querySelector("#cancel-search-button");

let users = [
  { name: "Igor", city: "Kyiv", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
];

renderUsers(users);

const deleteUser = (indexOfUser) => {
  users = users.filter((el, i) => i !== indexOfUser);
  renderUsers(users);
};

function renderUsers(usersToRender) {
  usersSection.innerHTML = "";

  const usersContent = usersToRender.map(
    (user) => `<div class="user-card">
        <p>${user.name}</p>
        <p>${user.city}</p>
        <span>${user.age}</span>
        <button class="delete-user-button">Delete</button>
    </div>`
  );

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
  const city = cityInput.value;

  const user = { name: name, age: age, city: city };

  users.push(user);

  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";

  renderUsers(users);
};

searchButton.onclick = () => {
  const usersToRender = users.filter((user) =>
    user.name.includes(searchInput.value)
  );
  renderUsers(usersToRender);
};

cancelSearchButton.onclick = () => {
    renderUsers(users);
    searchInput.value = "";
};
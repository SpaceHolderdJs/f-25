const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const cityInput = document.querySelector("#city");
const createButton = document.querySelector("#create");
const usersSection = document.querySelector("#users-section");
const searchInput = document.querySelector("#search");
const sortingByNameCheckbox = document.querySelector("#sort-by-name");
const sortingByAgeCheckbox = document.querySelector("#sort-by-age");
const paginationSection = document.querySelector("#pagination");

let users = [
  { name: "Igor", city: "Kyiv", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
  { name: "Igor", city: "Kyiv1", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
  { name: "Igor", city: "Kyiv2", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
  { name: "Oleg", city: "Kyiv", age: 10 },
  { name: "Igor", city: "Kyiv1", age: 20 },
];

let changingUser = undefined;
let paginationpageNumber = 0;

renderUsers();

const deleteUser = (indexOfUser) => {
  users = users.filter((el, i) => i !== indexOfUser);
  renderUsers();
};

const editUser = (indexOfUser) => {
  changingUser = {data: users[indexOfUser], index: indexOfUser};

  createButton.textContent = "Save changes";

  nameInput.value = changingUser.data.name;
  ageInput.value = changingUser.data.age;
  cityInput.value = changingUser.data.city;
};

function renderPagination (usersQuantity) {
  paginationSection.innerHTML = "";

  for ( let i = 0; i < usersQuantity / 3; i++ ) {
    const button = document.createElement("button");
    button.textContent = i;
    button.onclick = () => {
      paginationpageNumber = i;
      const groupedUsers = groupElementsOfArray(users, 3);
      renderUsers();
    }
    paginationSection.appendChild(button);
  }
};

const sorting = {
    names: () => {
       const usersCopy = [...users]; 
       usersCopy.sort((user1, user2) => user1.name.localeCompare(user2.name));
       renderUsers(usersCopy);
    },
    ages: () => {
      const usersCopy = [...users]; 
      usersCopy.sort((user1, user2) => +user1.age - +user2.age);
      renderUsers(usersCopy);
    }
};

function renderUsers(usersToRender = groupElementsOfArray(users, 3)[paginationpageNumber]) {
  renderPagination(users.length);

  usersSection.innerHTML = "";

  const usersContent = usersToRender.map(
    (user) => `<div class="user-card">
        <p>${user.name}</p>
        <p>${user.city}</p>
        <span>${user.age}</span>
        <button class="delete-user-button">Delete</button>
        <button class="edit-user-button">Edit</button>
    </div>`
  );

  usersContent.forEach((userLayout) => {
    usersSection.innerHTML += userLayout;
  });

  const deleteButtons = [...document.querySelectorAll(".delete-user-button")];

  deleteButtons.forEach((button, i) => {
    button.onclick = () => deleteUser(i);
  });

  const editButtons = [...document.querySelectorAll(".edit-user-button")];

  editButtons.forEach((button, i) => {
    button.onclick = () => editUser(i);
  });
}

createButton.onclick = () => {
  const name = nameInput.value;
  const age = +ageInput.value;
  const city = cityInput.value;

  if (!name || !age || !city) {
   return alert("Please enter all required data");
  }

  if (changingUser) {
   
    users[changingUser.index] = {
        name: name,
        age: age,
        city: city
    };

    changingUser = undefined;
    createButton.textContent = "Create User";
  } else {
    const user = { name: name, age: age, city: city };

    users.push(user);
  }

  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";

  renderUsers();
};

searchInput.oninput = (event) => {
  if (!event.target.value) return renderUsers();

  const usersToRender = users.filter(({ name, age, city }) =>
    [name, age.toString(), city].some((element) =>
      element.includes(event.target.value)
    )
  );

  renderUsers(usersToRender);
};


sortingByNameCheckbox.onchange = (event) => {
    if (event.target.checked) {
        sorting.names();
        sortingByAgeCheckbox.checked = false;
    } else {
        renderUsers(users);
    }
}

sortingByAgeCheckbox.onchange = (event) => {
  if (event.target.checked) {
      sorting.ages();
      sortingByNameCheckbox.checked = false;
  } else {
      renderUsers(users);
  }
}

function groupElementsOfArray(arr, oneSetQuantity) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr.slice(i * oneSetQuantity, (i + 1) * oneSetQuantity));
  }

  return result.filter((arr) => arr.length > 0 );
}


// const onClickBodyEvent = document.body.addEventListener("click", () => {
//   alert("Hello");
// });

// document.body.removeEventListener("click", onClickBodyEvent);


// document.body.onclick = () => {
//   alert("Hello");
// }

// document.body.onclick = null;

// document.body.ondblclick = () => {
//   alert("Hello");
// }

// document.body.onresize = () => {
//   alert(`Resize ${window.innerWidth} ${window.innerHeight}`);
  
// }



// const newButton = document.createElement("button");
// newButton.textContent = "NewButton";

// scrollUpButton.replaceWith(newButton);


// scrollUpButton.onclick = () => window.print();


// document.body.onscroll = () => {
//   alert(`Scroll ${window.scrollX} ${window.scrollY}`);
// }

// scrollUpButton.onclick = () => {
//   window.scrollTo({top: 0, behavior: "smooth"});
// }

// let interval;

// scrollUpButton.onmousedown = () => {
//   console.log("mousedown");
//   interval = setInterval(() => {
//     window.scrollTo({top: window.scrollY++, behavior: "auto"})}, 1500);
//     console.log(scrollY);
// }

// scrollUpButton.onmouseup = () => {
//   console.log("mouseup");
//   clearInterval(interval);
// }

// document.body.oncopy = (e) => {
//   alert("Copy");
//   e.preventDefault();
// }

// document.body.onpaste = () => {
//   alert("Paste");
// }

// document.body.onmousemove = (e) => {
//   console.log(e.pageX, e.pageY, e.target, "EVENT");
// }

// document.body.oncontextmenu = (e) => {
//   console.log("right click");
//   // e.preventDefault();
// }

// document.body.onkeypress = (e) => {
//   console.log("Key pressed", e.key);
// }

// document.body.onkeydown = (e) => {
//   console.log("Key down", e.key);
// }
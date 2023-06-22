const user = {
  name: "Igor",
  age: 23,
};

function registerUser({ name, age, city, adress, email, password }) {
  if (!password) return console.log(`Password is bad`);
  console.log(`User registered: ${name} ${email}`);
}

function authUser({ email, password, name, age }) {
  console.log(`User auth: ${email} ${password}`);
}

function addAdress({ email, adress }) {
  console.log(`User added adress: ${email} ${adress}`);
}

const connectionsOfForms = {
  registerForm: () => {
    const section = document.querySelector("#registration-section");

    const emailField = section.querySelector(".email-field");
    const passwordField = section.querySelector(".password-field");
    const cityField = section.querySelector(".city-field");
    const addressField = section.querySelector(".address-field");

    const button = section.querySelector("button");

    button.onclick = () => {
      const email = emailField.value;
      const password = passwordField.value;
      const city = cityField.value;
      const address = addressField.value;

      //cleaning fileds
      emailField.value = "";
      passwordField.value = "";
      cityField.value = "";
      addressField.value = "";

      const registerAdaptedUser = new UserAdapter(
        { ...user, email, password, city, address },
        "registration"
      );
      console.log(registerAdaptedUser, "registredAdaptedUser");
      registerUser(registerAdaptedUser);
    };
  },

  authForm: () => {
    const section = document.querySelector("#auth-section");

    const emailField = section.querySelector(".email-field");
    const passwordField = section.querySelector(".password-field");
    const cityField = section.querySelector(".city-field");
    const addressField = section.querySelector(".address-field");

    const button = section.querySelector("button");

    button.onclick = () => {
      //code here
    };
  },
};

connectionsOfForms.registerForm();
connectionsOfForms.authForm();

class UserAdapter {
  static cases = {
    registration: (recivedData) => {
      const { name, age, password } = recivedData;
      recivedData.info = `${name} ${age}`;
      if (password.length < 4) return { ...recivedData, password: null };

      return recivedData;
    },
    auth: (recivedData) => {
      //some changes here
      return recivedData;
    },
    add_adress: () => {
      const section = document.querySelector("#add-address-section");
      const recivedData = {
        email: "email@gmail.com",
        adress: "adress",
      };

      return recivedData;
    },
  };

  constructor(data, adapterCase) {
    const adaptiveData = UserAdapter.cases[adapterCase]
      ? UserAdapter.cases[adapterCase](data)
      : {};

    return { ...data, ...adaptiveData };
  }
}

// На базі коду з уроку реалізуйте роботу форми Auth

// const authAdaptedUser = new UserAdapter(user, "auth");
// console.log(authAdaptedUser, "authAdaptedUser");
// authUser(authAdaptedUser);

// const addedAdressAdapdetUser = new UserAdapter(user, "add_adress");
// console.log(addedAdressAdapdetUser, "addedAdressAdapdetUser");
// addAdress(addedAdressAdapdetUser);

// const badCasesUserAdaptation = new UserAdapter(user, "bad_case_1111");
// console.log(badCasesUserAdaptation, "badCasesUserAdaptation");

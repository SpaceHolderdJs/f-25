// MVC

// M - model
// V - view
// C - controller

import { UserView } from "./user/view.mjs";

const user = new UserView("Igor", 23, "Kyiv");
user.render(0);

const user2 = new UserView("Igor2", 230, "Kyiv");
user2.render(1);

class Service {
  constructor(url) {
    this.url = url;
  }

  async getRequest() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  async postRequest(data) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const payload = await response.json();
    return payload;
  }

  async patchRequest(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });

    const payload = await response.json();
    return payload;
  }

  async deleteRequest(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });

    const status = response.status;
    return status;
  }
}

class PostServise extends Service {
  constructor(url) {
    super(url);
  }
}

const postService = new PostServise(
  "https://jsonplaceholder.typicode.com/posts"
);

postService.getRequest().then((data) => console.log(data, "posts"));
postService
  .postRequest({ title: "title", body: "string", userId: 0 })
  .then((data) => console.log(data, "creation of posts"));
postService
  .patchRequest(1, { id: 1, title: "title", body: "body" })
  .then((data) => console.log(data, "updates of posts"));
postService
  .deleteRequest(1)
  .then((status) => console.log("status of deletion", status));

class UserService extends Service {
  constructor(url) {
    super(url);
  }
}

const userService = new Service("https://jsonplaceholder.typicode.com/users");

userService.getRequest().then((data) => console.log(data, "users"));
userService
  .postRequest({ title: "title", body: "string", userId: 0 })
  .then((data) => console.log(data, "creation of users"));
userService
  .patchRequest(1, { id: 1, title: "title", body: "body" })
  .then((data) => console.log(data, "updates of users"));
userService
  .deleteRequest(1)
  .then((status) => console.log("status of deletion (user)", status));

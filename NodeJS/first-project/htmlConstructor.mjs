import fs from "fs";

export class HTMLConstructor {
  constructor(fileName = "", content = "") {
    this.fileName = fileName;
    this.content = content;
  }

  generateFile(path = "") {
    // опишіть логіку створення HTML файлу на базу його назви і контенту

    if (path) {
      !fs.existsSync(path) && fs.mkdirSync(path);
    }

    fs.writeFileSync(
      path ? `${path}/${this.fileName}.html` : `${this.fileName}.html`,
      this.content
    );

    return this;
  }
}

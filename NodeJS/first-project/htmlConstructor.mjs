import fs from "fs";

export class HTMLConstructor {
  constructor(fileName = "", content = "") {
    this.fileName = fileName;
    this.content = content;
  }

  generateFoldersFromPath(path) {
    if (!path.includes("/")) return path;

    const pathItems = path.split("/");
    console.log(pathItems, "!!!");

    // написати цикл що створить всі папки з масиву pathItems
    // !fs.existsSync(path) && fs.mkdirSync(path);
  }

  generateFile(path = "") {
    // опишіть логіку створення HTML файлу на базу його назви і контенту

    if (path) {
      this.generateFoldersFromPath(path);
    }

    fs.writeFileSync(
      path ? `${path}/${this.fileName}.html` : `${this.fileName}.html`,
      this.content
    );

    return this;
  }
}

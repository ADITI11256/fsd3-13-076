import {stat} from "fs/prpomises";
const stats = await stat ("readme.md");
console.log("is file:", stats.isFile());

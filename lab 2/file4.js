// import { mkdir } from "fs/promises";

// // await mkdir("upload");
// // console.log("folder created");
// await  mkdir("upload/resume");
// console.log("resume created under upload folder")
import { mkdir } from "fs/promises";

await mkdir("upload/resume", { recursive: true });

console.log("resume created under upload folder");

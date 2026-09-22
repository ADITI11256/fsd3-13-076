import { notDeepStrictEqual } from "assert/strict";
import { writeFile, readFile } from "fs/promises";
const writeData = async (fname, contents) => {
 await writeFile(fname, contents);
 console.log("file written");

};
const readData = async(fname) => {
    const data = await readFile(fname, "utf-8");
    console.log("File contents:");
    console.log(data);
};
const appendData = async(fname, contents) =>{
    await appendFile (fname, "\n" + contents);

};

await writeData("happy.txt", "I am  very happy");
await readData("happy.txt");
await appendData ("happy.txt", "FSD IS INTRESTING");
await readData("happy.txt");

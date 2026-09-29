import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "public", "index.html"));
});

// About page
app.get("/about", (req, res) => {
  res.sendFile(path.join(dirname, "public", "about.html"));
});

// 404 page
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start server
app.listen(3333, () => {
  console.log("prg2 is running....");
});

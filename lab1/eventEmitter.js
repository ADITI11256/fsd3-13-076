import{ EventEmitter }from "node:events";
const task = new EventEmitter();
const sayhi = (name) => {
    console.log(`Logged In  ${name}`);
};
const start = () => {
    console.log("Starting the task");
};

    task.on("greet", start);
    task.on("greet", sayhi);
    task.emit("greet", "Aditi");
     task.emit("greet", "Prithvi");
     task.emit("greet", "MAYANK");
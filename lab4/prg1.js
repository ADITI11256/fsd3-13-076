import express from 'express';
// reqest goes here 
app.get("/",(req,res) => {
    res.send("<h1>Hello express</h1>");
});

app.use((req, res) => {
    res.status(404).dend ("<h1>page not found </h1>");

});
//aleways listen at last 
app.listen (3333, () => console.log ("prg1 is running at 3333"));

const app = express()




app.listen(3333,() => console.log(" prg1 server is running on port 3333"));
 
 app.get("/products", (req,res) => {
    res.status(200).send (products);

 });
 

import http from "http";
const server = http.createServer((req, res) => {
  const products = {
    id: 1,
    name: mobile,
    price: 3000,
    rating: 4.7,
    review: 225,
  };

  if (req.url === "/api//products") {
    res.end(json.stringify(products));
  } else {
    res.statuscode = 404;
    res.end();
  }
});

server.listen(3000, () => console.log(" prg4 is running..."));

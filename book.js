//npm init
//npm install express / body-parser /cors

const express = require("express"); //import the library
const app = express(); //make a new server
const port = 3000;
const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
  },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 4, title: "The Diary of a Young Girl", author: "Anne Frank" }
];
app.get("/", (req, res) => res.redirect("/books"));
app.get("/books", (req, res) => res.json({ data: books }));
app.get("/books/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const book = books.find(b => b.id == bookId);
  res.send(book);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //make the server listen to request

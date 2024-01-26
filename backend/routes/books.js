const express = require("express");
const router = express.Router();

// Simulando una base de datos con un array de libros
let books = [];

// Ruta para obtener la lista de libros
router.get("/", (req, res) => {
  res.json(books);
});

// Ruta para agregar un nuevo libro
router.post("/", (req, res) => {
  // Asumiendo que el cuerpo de la solicitud contiene 'title' y 'author'
  const { title, author } = req.body;

  // Verificar si el libro ya existe
  const bookExists = books.some(
    (book) => book.title === title && book.author === author
  );
  if (bookExists) {
    return res.status(400).send("El libro ya existe.");
  }

  // Crear un nuevo libro y agregarlo al array 'books'
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);

  res.status(201).send(`Libro ${title} de ${author} agregado con éxito.`);
});

module.exports = router;

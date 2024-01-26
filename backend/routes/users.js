const express = require("express");
const router = express.Router();

// Simulando una base de datos con un array de usuarios
let users = [];

// Ruta para registrar un nuevo usuario
router.post("/register", (req, res) => {
  // Asumiendo que el cuerpo de la solicitud contiene 'name', 'email' y 'password'
  const { name, email, password } = req.body;

  // Verificar si el usuario ya existe
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return res.status(400).send("El usuario ya existe.");
  }

  // Crear un nuevo usuario y agregarlo al array 'users'
  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);

  // En una aplicación real, nunca deberías enviar la contraseña de vuelta
  res.status(201).send(`Usuario ${name} registrado con éxito.`);
});

// Ruta para iniciar sesión
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Buscar al usuario por email y contraseña
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.send(`Bienvenido ${user.name}!`);
  } else {
    res.status(401).send("Credenciales inválidas.");
  }
});

module.exports = router;

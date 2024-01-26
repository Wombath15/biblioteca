const express = require("express");
const userRoutes = require("./routes/users");
const bookRoutes = require("./routes/books");

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/books", bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

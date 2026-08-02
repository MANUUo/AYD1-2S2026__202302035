const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    nombre: "Manuel Alejandro López Canel",
    cancion_favorita: "Kyougen - Ado" 
  });
});

app.listen(port, () => {
  console.log(`API ejecutándose en http://localhost:${port}`);
});
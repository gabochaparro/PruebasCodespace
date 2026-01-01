const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const sendPage = (res, page) => {
    res.sendFile(path.join(__dirname, 'public', page));
}

// Ruta para el Inicio
app.get('/', (req, res) => sendPage(res, "index.html"));

// Ruta para Contacto (URL: http://localhost:3000/contacto)
app.get('/contacto', (req, res) => sendPage(res, "contacto.html"));

// Ruta para About (URL: http://localhost:3000/about)
app.get('/about', (req, res) => sendPage(res, "about.html"));

// Manejo de error 404 (Ruta no encontrada)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor de páginas en http://localhost:${PORT}`);
});
import express from "express";
const app = express();
const PORT = 3000;

// Celsius a Fahrenheit
app.get("/convert/celsius-to-fahrenheit/:value", (req, res) => {
    const celsius = parseFloat(req.params.value);
    if (isNaN(celsius)) return res.status(400).json({ error: "Valor inválido" });

    const fahrenheit = (celsius * 9 / 5) + 32;
    res.json({ celsius, fahrenheit });
});

// Fahrenheit a Celsius
app.get("/convert/fahrenheit-to-celsius/:value", (req, res) => {
    const fahrenheit = parseFloat(req.params.value);
    if (isNaN(fahrenheit)) return res.status(400).json({ error: "Valor inválido" });

    const celsius = (fahrenheit - 32) * 5 / 9;
    res.json({ fahrenheit, celsius });
});

// Km a Millas
app.get("/convert/km-to-miles/:value", (req, res) => {
    const km = parseFloat(req.params.value);
    if (isNaN(km)) return res.status(400).json({ error: "Valor inválido" });

    const miles = km * 0.621371;
    res.json({ km, miles });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
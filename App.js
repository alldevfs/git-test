const express = require('express');
const app = express();

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/pages/index.html");
});

app.get("/home", function(req, res) {
	res.send("Home");
});

app.get("/sobre", function(req, res) {
	res.send("Sobre");
});

app.get("/contato", function(req, res) {
	res.send("Contato");
});

// app.get("/parametros/:nome/:cargo/:nivel", function(req, res) {
// 	res.send("<h2>Olá "+req.params.nome+".</h2>"+
// 		"<h3>Você trabalha como "+req.params.cargo+"</h3>"+
// 		"<h4>e seu nível de conhecimento é "+req.params.nivel+"</h4>");
// });

app.listen(8080, function() {
	console.log('Servidor rodando na url https://localhost:8080');
});
const express = require('express'); // express est un module node
const app = express(); // cette application peut être utiliser pour démarrer un serveur et spécifier le comportement du serveur. 

const port = 4001; // fournir un argument de numéro de port à notre serveur pour lui dire où écouter. 

app.get('./api/:id', (req, res) => { // GET récupère des ressources à partir d'un serveur
    const id = req.params.id;
    res.send(id);
});

app.listen(port, () => {
    console.log(`Server started at ${port}`); // le serveur écoute sur le port 4001
});
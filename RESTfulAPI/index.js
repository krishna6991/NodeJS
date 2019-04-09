const routes = require('./source/routes/routes.js');
const express = require('express');
const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req,res) => {
	res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`your server is running on port ${PORT}`);
});



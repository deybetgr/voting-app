const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.setHeader('Pragma', 'no-cache');
	res.setHeader('Expires', '0');
	next();
});

app.listen(app.get('port'), () => {
	console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const verification = require('./controllers/verification')
const messageWebhook = require('./controllers/messageWebhook');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(6000, () => console.log('Webhook server is listening, port 6000'));

app.get('/webhook', verification);
app.post('/webhook', messageWebhook);
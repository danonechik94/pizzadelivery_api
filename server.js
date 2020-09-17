const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { models } = require('./db/orm');

const PORT = 8080;
const app = express();

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET endpoint for getting shop items
app.get('/_api/get_items', async (req, res) => {
    const allItems = await models.item.findAll({ include: models.price });
    console.log(allItems)
    res.json(allItems);
});

app.listen(PORT, () => {
    console.log(`Hello world app listening on port ${PORT}!`);
})
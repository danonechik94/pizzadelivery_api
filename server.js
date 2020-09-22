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
    const allItems = await models.item.findAll({ 
        include: [
            {
                model: models.price,
                as: 'price'
            },
            {
                model: models.item,
                as: 'comboItem'
            },
        ] 
    });
    console.log(allItems)
    res.json(allItems);
});

// GET endpoint for getting auth info
app.get('/_api/get_auth', async (req, res) => {
    // TODO set sid for authorized user if none is passed via request
    res.json(allItems);
});

// POST endpoint for placing an order and payment
app.post('/_api/create_order', async (req, res) => {
    // TODO get price from items within database, not from frontend
    res.json(allItems);
});

app.listen(PORT, () => {
    console.log(`Hello world app listening on port ${PORT}!`);
})
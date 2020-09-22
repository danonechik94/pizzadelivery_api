const sequelize = require('../orm');

const { Item, Price } = require('../models');

async function reset() {
    await sequelize.sync({ force: true });

    await Item.create({ 
        name: 'Pepperoni Pizza',
        description: 'A classic pepperoni pizza with tomato sauce, mozarella and oregano.',
        type: 'pizza',
        price: { base: 2 },
    }, {
        include: [
            {
                model: Price,
                as: 'price',
            }
        ]
    });

    await Item.create({ 
        name: 'Cheese Pizza',
        description: 'A classic 4 cheeses pizza with creamy sauce.',
        type: 'pizza',
        price: { base: 3 },
    }, {
        include: [
            {
                model: Price,
                as: 'price',
            }
        ]
    });

    await Item.create({ 
        name: 'Vegan Pizza',
        description: 'Vegan pizza with cheese, parceley, eggplant, mushrooms and oregano',
        type: 'pizza',
        price: { base: 5 },
    }, {
        include: [
            {
                model: Price,
                as: 'price',
            }
        ]
    });

    const meatPizza = await Item.create({ 
        name: 'Meat Pizza',
        description: 'Meat pizza with baked chiken fillet, bacon, tomato sauce and mozarella.',
        type: 'pizza',
        price: { base: 5 },
    }, {
        include: [
            {
                model: Price,
                as: 'price',
            }
        ]
    });

    const colaDrink = await Item.create({
        name: 'Coca-Cola 0.5L',
        description: 'A 0.5L cup of Coke with ice.',
        type: 'drink',
        price: { base: 2.5 },
    }, {
        include: [
            {
                model: Price,
                as: 'price',
            }
        ]
    });
    const spriteDrink = await Item.create({
        name: 'Sprite 0.5L',
        description: 'A 0.5L cup of Sprite with ice.',
        type: 'drink',
        price: { base: 2.5 },
    }, {
        include: [ 
            {
                model: Price,
                as: 'price',
            }
        ]
    });

    const comboItem = await Item.create({ 
        name: 'Pizza + 2 Drinks combo',
        description: 'Our best meat pizza and two drinks for two people to enjoy.',
        type: 'combo',
        price: { base: 10 },
        items: [
            meatPizza,
            colaDrink,
            spriteDrink,
        ],
    }, {
        include: [ 
            {
                model: Price,
                as: 'price',
            },
            { 
                model: Item,
                as: 'comboItem'
            } 
        ]
    });

    comboItem.addComboItem(meatPizza);
    comboItem.addComboItem(colaDrink);
    comboItem.addComboItem(spriteDrink);
    console.log('123');
}

reset();
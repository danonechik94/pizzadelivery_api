const sequelize = require('../orm');

const { Item, Price } = require('../models');

async function reset() {
    await sequelize.sync({ force: true });
    const pepperoniPizzaPrice = await Price.create({ base: 2 });
    await Item.create({ 
        name: 'Pepperoni Pizza',
        description: 'A classic pepperoni pizza with tomato sauce, mozarella and oregano.',
        type: 'pizza',
        price: pepperoniPizzaPrice,
    }, {
        include: [ Item.Price ]
    });

    const cheesePizzaPrice = await Price.create({ base: 3 });
    await Item.create({ 
        name: 'Cheese Pizza',
        description: 'A classic 4 cheeses pizza with creamy sauce.',
        type: 'pizza',
        price: cheesePizzaPrice,
    }, {
        include: [ Item.Price ]
    });


    const veganPizzaPrice = await Price.create({ base: 5 });
    await Item.create({ 
        name: 'Vegan Pizza',
        description: 'Vegan pizza with cheese, parceley, eggplant, mushrooms and oregano',
        type: 'pizza',
        price: veganPizzaPrice,
    }, {
        include: [ Item.Price ]
    });

    const meatPizzaPrice = await Price.create({ base: 5 });
    await Item.create({ 
        name: 'Meat Pizza',
        description: 'Meat pizza with baked chiken fillet, bacon, tomato sauce and mozarella.',
        type: 'pizza',
        price: meatPizzaPrice,
    }, {
        include: [ Item.Price ]
    });
}

reset();
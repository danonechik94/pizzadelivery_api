const { DataTypes, Model, Sequelize } = require('sequelize');
class Price extends Model {}
class Item extends Model {}
class Order extends Model {}
class ItemOrder extends Model {}

module.exports.init = (sequelize) => {
    Price.init({
        base: DataTypes.DOUBLE,
    }, { sequelize, modelName: 'price' });

    Item.init({
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING },
        type: { 
            type: DataTypes.ENUM, 
            values: ['combo', 'pizza', 'drink', 'snack'] 
        }
    }, { sequelize, modelName: 'item' });

    Item.belongsTo(Price, {
        foreignKey: 'priceId', 
        as: 'price'
    });

    const Combos = sequelize.define('combo_item', {});

    Item.belongsToMany(Item, { 
        through: Combos,
        as: 'comboItem' 
    });



    ItemOrder.init({
        quantity: { type: DataTypes.NUMBER, allowNull: false }
    }, { sequelize, modelName: 'itemOrder' });

    Order.init({
        orderNumber: { type: DataTypes.STRING, allowNull: false },
        total: { type: DataTypes.DOUBLE, allowNull: false },
    }, { sequelize, modelName: 'order' });

    ItemOrder.hasMany(Item, { as: 'items' });

    Order.belongsToMany(ItemOrder, { 
        through: 'orderItem',
        as: 'orederItems' 
    });
};


module.exports.Item = Item;
module.exports.Price = Price;

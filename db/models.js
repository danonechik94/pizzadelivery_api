const { DataTypes, Model, Sequelize } = require('sequelize');
class Price extends Model {}
class Item extends Model {}

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
    Item.belongsToMany(Item, { 
        through: 'item_combos',
        as: 'items' 
    });
    // Item.belongsTo(Item, {
    //     foreignKey: 'itemId',
    //     onDelete: 'cascade'
    // });
    // Item.hasMany(Item, { 
    //     foreignKey: 'itemId', 
    //     as: 'items', 
    //     onDelete: 'cascade'
    // });
    // Item.hasOne(Price, { 
    //     foreignKey: 'priceId', 
    //     onDelete: 'cascade' 
    // });
    // Price.belongsTo(Item);

};


module.exports.Item = Item;
module.exports.Price = Price;

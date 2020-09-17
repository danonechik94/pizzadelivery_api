const { DataTypes, Model } = require('sequelize');
class Price extends Model {}
class Item extends Model {}

module.exports.init = (sequelize) => {
    Price.init({
        base: DataTypes.DOUBLE
    }, { sequelize, modelName: 'price' });

    Item.init({
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING },
        type: { 
            type: DataTypes.ENUM, 
            values: ['combo', 'pizza', 'drink', 'snack'] 
        }
    }, { sequelize, modelName: 'item' });

    Item.hasMany(Item);
    Item.Price = Price.belongsTo(Item);
};
module.exports.Item = Item;
module.exports.Price = Price;

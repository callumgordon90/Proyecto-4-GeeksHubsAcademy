'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, {
        foreignKey: 'peliculaId'
      });
    }
  }
  Pelicula.init({
    title: DataTypes.STRING,
    overview : DataTypes.STRING,
    price : DataTypes.INTEGER,
    image : DataTypes.STRING,
    date : DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};
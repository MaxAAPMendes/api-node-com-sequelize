'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association with other tables
      // A.hasMany(B)
      // B tem q ter a chave estrangeira
      // Pessoas.hasMany(models.NomeModel, {
        // foreingKey: 'nome_id',
      // })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    tableName: 'Pessoas',
    freezeTableName: true
  });
  return Pessoas;
};

// example codigo v5
// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Pessoas = sequelize.define('Pessoas', {
//     nome: DataTypes.STRING,
//     ativo: DataTypes.BOOLEAN,
//     email: DataTypes.STRING,
//     role: DataTypes.STRING
//   }, {});
//   Pessoas.associate = function(models) {
//     // associations can be defined here
//   };
//   return Pessoas;
// };
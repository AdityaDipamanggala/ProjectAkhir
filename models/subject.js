'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.sequelize
  class Subject extends Model {}
  Subject.init({
    name: DataTypes.STRING,
    credits: DataTypes.INTEGER,
    lecturer: DataTypes.STRING
  },{
    sequelize
  })
  
  Subject.associate = function(models) {
    Subject.belongsToMany(models.Students,{through : `StudentSubjects`})
  };
  return Subject;
};
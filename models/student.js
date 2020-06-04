'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class Student extends Model {}
  Student.init({firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    ipk: DataTypes.FLOAT},
    {sequelize})
  Student.associate = function(models) {
    Student.belongsToMany(models.Subject,{through : `StudentSubjects`})
  };
  return Student;
};
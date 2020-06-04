'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class StudentSubject extends Model {}
  StudentSubject.init({
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  },{
    sequelize
  })
  
  StudentSubject.associate = function(models) {
    StudentSubject.belongsTo(models.Students)
    StudentSubject.belongsTo(models.Subjects)
  };
  return StudentSubject;
};
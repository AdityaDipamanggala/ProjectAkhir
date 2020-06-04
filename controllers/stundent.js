const {Student,Subject,StudentSubject} = require(`../models`)
const Helper = require(`../helper/helper`)
class Controller {

    static list(req,res){
       Student.findAll({
           include : [{
               model : Subject
           }]
       })
       .then (data => {
        //    res.send(data)
           res.render(`studentsList`,{
           data,
           getFullName : Helper.getFullName,
           totalCredit : Helper.totalCredit
        })})
       .catch (err => {res.send(err)})
    }

    static listStudentSubjects (req,res){
        StudentSubject.findAll({
            where :{
                StudentId : req.params.id
            },
            include : [{
                model : Subject
            },
            {
                model : Student
            }
        ]
        })
        .then (data => {
            // res.send(data)
            Student.findAll({where : { id : req.params.id}})
            .then (dataStudent => {
                res.render(`studentSubjects`,{
                    dataStudent,
                    data,
                    getFullName : Helper.getFullName
                })
            })
            .catch (err => {res.send(err)})
        })
        .catch (err => res.send(err)) 
    }

    static delete (req,res) {
        StudentSubject.destroy({where : {id : req.params.id}})
        .then (data => res.redirect(`/students/${req.params.student}/subjects`))
    }

    static studentAddSubject (req,res) {
        Student.findOne({where : {id : req.params.id}})
        .then (dataStudent => {
            Subject.findAll()
            .then (dataSubject => {
                // res.send(dataStudent)
                res.render(`formAdd`,{dataStudent,dataSubject, getFullName : Helper.getFullName})
            })
            .catch (err => res.send(err))
        })
        .catch(err => res.send(err))
    }

    static studentAddSubject (req,res) {
        Student.findOne({where : {id : req.params.id}})
        .then (dataStudent => {
            Subject.findAll()
            .then (dataSubject => {
                // res.send(dataStudent)
                res.render(`formAdd`,{dataStudent,dataSubject, getFullName : Helper.getFullName})
            })
            .catch (err => res.send(err))
        })
        .catch(err => res.send(err))
    }

    static studentAddSubjectSubmit (req,res) {
       let obj = {
           StudentId : req.params.id,
           SubjectId : req.body.subjects,
           createdAt : new Date (),
           updatedAt : new Date () 
       }
    //    res.send(obj)
       StudentSubject.create(obj)
       .then(data => res.redirect(`/students/${req.params.id}/subjects`))
       .catch(err => res.send(err))

    }

}

module.exports = Controller
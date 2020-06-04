const router = require (`express`).Router()
const Controller = require (`../controllers/stundent`)

router.get(`/students`,Controller.list)
router.get(`/students/add`,Controller.add)
router.post(`/students/add/submit`,Controller.addSubmit)
router.get(`/students/edit/:id`,Controller.edit)
router.post(`/students/edit/:id`,Controller.editSubmit)
router.get(`/students/delete/:id`,Controller.delete)



module.exports = router
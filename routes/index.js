const router = require (`express`).Router()
const studentsRoutes = require (`./student`)
// const subjectsRoutes = require (`./subject`)

router.get(`/`,(req,res) => {res.render(`home`)})
router.use(studentsRoutes)

module.exports = router
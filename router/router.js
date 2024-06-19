const { Router } = require("express");
const { movieUi, addMovies, insertData, deleteData, editData } = require("../controller/controller");

const router = Router();
router.get('/', movieUi);
router.get('/addMovie',addMovies);
router.post('/insertData',insertData);
router.get('/deleteData:id',deleteData)
router.get('/editData:id',editData)
module.exports = router
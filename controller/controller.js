const { error } = require("console");
const uploadImage = require("../middleware/middleware");
const fs = require('fs');
const movieDB = require("../models/movieSchema");
const movieUi = async (req, res) => {
     try {
          const data = await movieDB.find({})
          // console.log(data)
          return res.render('movieUi', { data });
     } catch (error) {
          console.log(error);
     }

}
const addMovies = async (req, res) => {
     try {
          return res.render('addMovies')
     } catch (error) {
          console.log(error);
     }
}
const insertData = async (req, res) => {
     const { moviename, year, image, dsc, id } = req.body;
     try {
          if (id) {
               const data = await movieDB.findByIdAndUpdate(id, { moviename, year, image, dsc })
               return res.redirect('/')
          } else {
               const data = await movieDB.create({
                    moviename,
                    year,
                    image,
                    dsc
               });
               return res.redirect('/')
          }
     } catch (error) {
          console.log(error);
     }
}
const deleteData = async (req, res) => {
     const { id } = req.params
     try {
          await movieDB.findByIdAndDelete(id)
          console.log("data delete")
          return res.redirect('/')
     } catch (error) {
          console.log(error);
     }
}
const editData = async (req, res) => {
     const { id } = req.params
     try {
          const data = await movieDB.findById(id)
          return res.render('edit', { data })
          
     } catch (error) {
console.log(error);
     }
}

module.exports = { movieUi, addMovies, insertData, deleteData,editData }
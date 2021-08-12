const Course = require('../models/Course');
const { multipleMongooseToObject }= require('../../util/mongoose')

class SiteController {

  index(req, res, next) {
    Course.find({})
      .then(courses => { 
        res.render('home', {
          courses: multipleMongooseToObject(courses) 
        });
      })
      .catch(next);
  }

  // index(req, res, next) {
  //   Course.find({})
  //     .then(courses => res.json(courses))
  //     .catch(next);
  // }

  //[GET] /search
    search(req, res) {
      res.render('search');
  }
}

module.exports = new SiteController();

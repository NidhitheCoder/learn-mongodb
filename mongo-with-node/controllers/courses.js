const express = require('express');
const mongoose = require('mongoose');
const CourseModel = mongoose.model('Course');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('courses controller');
});

router.get('/add', (req, res) => {
  res.render('addCourse');
});

router.post('/add', (req, res) => {
  const course = CourseModel();
  course.courseName = req.body.courseName;
  course.courseFee = req.body.courseFees;
  course.courseDuration = req.body.courseDuration;
  course.courseId = Math.ceil(Math.random() * 100000000);
  course.save((err, doc) => {
    if (!err) {
      res.redirect('/course/list')
    } else {
      res.send('Error occured');
    }
  });
});

router.get('/list', (req, res) => {
  // // setting
  // let course = new CourseModel();
  // course.courseName = 'course four';
  // course.courseId = '12';
  // course.save();
 
  // Getting
  CourseModel.find({}).lean()
  // execute query
  .exec(function(error, docs) {
    if (!error) {
      console.log('course', docs);
      res.render('lists', { data: docs });
    } else {
      res.send('error');
    }
  });

});

module.exports = router;

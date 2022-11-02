const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000

const categories = require('./data/categories.json')
const courses = require('./data/course.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Working Fine')
});

app.get('/course-categories', (req, res)=> {
    res.send(categories)
});

app.get('/course', (req, res) => {
  res.send(courses)
})

app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find( c => c._id == id);
  res.send(selectedCourse);
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  const categoryCourse = courses.filter( c => c.category_id === id)
  res.send(categoryCourse)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
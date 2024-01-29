const cors = require('cors')
const Movies = require('./models/movie')
const mongoose = require('mongoose');
const express = require('express');
const Movie = require('./models/movie');
const Person = require('./models/person');
const Cast = require('./models/cast');
const Theatre = require('./models/theatre');
const Screen = require('./models/screen')
const Show = require ('./models/show')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/movies', async(req, res) => {
    const movies= await Movie.find({});
    res.status(200).json(movies)
})

app.get('/movies/:movieId', async(req,res)=>{
  const movie = await Movie.findById(req.params.movieId).exec();
  res.status(200).json(movie)

})

app.get('/movies/:movieId/cast', async(req,res)=>{
  const cast = await Cast.find({movie: req.params.movieId}).populate('person');
  res.status(200).json(cast)

})

app.get('/movies/:movieId/show', async(req,res) => {
  const show = await Show.find({movie: req.params.movieId}).populate('screen');
  res.status(200).json(show)
})

app.post('/movies', async(req,res)=>{
    const newMovie= new Movie(req.body)
    await newMovie.save()
    res.status(201).json(newMovie)
})

app.get('/persons',async(req,res)=>{
  const persons = await Person.find({});
  res.status(200).json(persons)
})

app.post('/persons', async(req,res)=>{
  const newPersons= new Person(req.body)
  await newPersons.save()
  res.status(201).json(newPersons)
})

app.get('/cast',async(req,res)=>{
  const cast = await Cast.find({});
  res.status(200).json(cast)
})

app.post('/cast', async(req,res)=>{
  const cast= new Cast(req.body)
  await cast.save()
  res.status(201).json(cast)
})

app.get("/theatres",async(req,res)=>{
  const theatres = await Theatre.find({});
  res.status(200).json(theatres)
})

app.post("/theatres",async(req,res,)=>{
  const theatre = new Theatre(req.body)
  await theatre.save()
  res.status(201).json(theatre)
})

app.get("/screen",async(req,res)=>{
  const screen = await Screen.find({});
  res.status(200).json(screen)
})

app.post("/screen",async(req,res,)=>{
  const screen = new Screen(req.body)
  await screen.save()
  res.status(201).json(screen)
})

app.get("/show",async(req,res)=>{
  const show = await Show.find({});
  res.status(200).json(show)
})

app.get('/show/:showId', async (req,res)=>{
  const show = await Show.findById(req.params.showId).populate('screen').exec();
  res.status(200).json(show)
})

app.post("/show",async(req,res,)=>{
  const show = new Show(req.body)
  await show.save()
  res.status(201).json(show)
})

app.get('/', (req, res) => {
  res.send('Hello, World!');
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(console.log("db connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://muhammedsheheer99:nVtw22PvY1zwSY10@cluster0.mfffnwy.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

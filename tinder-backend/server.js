import express from 'express'
import mongoose from 'mongoose'

const app = express();
const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://admin:27ayxE2PRitp2a9r@cluster0.jvazg.mongodb.net/tinderdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

app.get('/', (req, res) => {
  res.status(200).send('HELLO CLEVER PROGRAMMER!!!');
})

app.listen(port, () => console.log(`listening on localhost: ${port}`))
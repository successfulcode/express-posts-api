import 'dotenv/config' 
import express from 'express'
import mongoose from 'mongoose'

import PostsRouter from './src/routers/PostsRouter.js'
const app = express()

const port = process.env.PORT || 6003,
  mongo_db_path = process.env.MONGO_DB_PATH

app.get('/', (req, res) => {
  res.send('Posts api')
})

app.use(express.json())
app.use('/api', PostsRouter)

async function App() {
  try {
    await mongoose.connect(mongo_db_path)
      .then(() => console.log('DB connected'))

    app.listen(port, () => {
      console.log(`The server started on port ${port}`)
    })
  } catch (e) {
    console.log(e)
  }
}

App()
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import functionRoute from './routes/functionsRoute.js'
import { configDotenv } from 'dotenv'

const app = express()
app.use(express.json())

app.use("/bfhl", functionRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is now running on Port:${PORT}`)
})

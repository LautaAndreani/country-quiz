import express, { Application } from "express"
import { config } from "dotenv"
import cors from "cors"

import router from "./routes/quiz.routes"
import db from "./config/db"

config()
const { PORT, MONGODB_URI }: any = process.env

const app: Application = express()
app.use(express.json())
app.use(cors())

//routes
app.use("/api", router)

db(MONGODB_URI).then(() => {
	app.listen(3000, () => {
		console.log(`Server has enabled in PORT ${PORT}`)
	})
})

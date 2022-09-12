import { Schema, model } from "mongoose"
import { Quiz } from "../types/types"

const QuizSchema = new Schema<Quiz>({
	resource: {
		type: String,
		required: true,
	},
	question: {
		type: String,
		required: true,
	},
	options: {
		type: [String],
		required: true,
	},
	correct: {
		type: Number,
		required: true,
	},
})

const QuizModel = model("Quiz", QuizSchema)

export default QuizModel

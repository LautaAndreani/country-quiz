import { Response } from "express"
import QuizModel from "../models/quiz.model"
import { Quiz } from "../types/types"

export const getQuestions = async (_req: any, res: Response) => {
	try {
		const questions: Quiz[] = await QuizModel.find({})
		res.status(200).json(questions)
	} catch (error) {
		res.status(400).json({ error: (error as Error).message })
	}
}

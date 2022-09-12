import { Router } from "express";
import { getQuestions } from "../controllers/quiz.controller";

const router = Router()

router.get('/questions', getQuestions)

export default router
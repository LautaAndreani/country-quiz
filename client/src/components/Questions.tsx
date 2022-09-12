import { Stack } from "@chakra-ui/react"
import { useState } from "react"
import { Cards, FinishGame } from "../components"
import { quiz } from "../mockup/quiz"
import { StatusButton } from "../models/types"

const Questions = () => {
	const getRandomQuestion = Math.floor(Math.random() * quiz.length)
	const [statusButton, setStatusButton] = useState<StatusButton>("default")
	const [points, setPoints] = useState<number>(getRandomQuestion)
	const [getCorrectOption, setGetCorrectOption] = useState<string | undefined>("")
	const [finishGame, setFinishGame] = useState<boolean>(false)

	const handleAnswer = (option: string = "") => {
		const getCorrect = quiz[points].correct
		const getCorrectAnswer = quiz[points].options.at(getCorrect)

		if (option === getCorrectAnswer) {
			setGetCorrectOption(getCorrectAnswer)
			setStatusButton("success")
		} else console.log("wrong answer")
	}

	const nextQuestion = () => {
		setPoints(prev => prev + 1)
		setStatusButton("default")
		if (points + 1 === quiz.length) return setFinishGame(true)
	}

	const handleAgain = () => {
		setFinishGame(false)
		setPoints(0)
		setStatusButton("default")
	}

	return (
		<Stack>
			{!finishGame ? (
				<>
					<Cards
						quiz={quiz[points]}
						statusButton={statusButton}
						getCorrectOption={getCorrectOption}
						handleAnswer={handleAnswer}
						nextQuestion={nextQuestion}
					/>
				</>
			) : (
				<FinishGame points={points} handleAgain={handleAgain} />
			)}
		</Stack>
	)
}

export default Questions

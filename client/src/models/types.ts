export interface Quiz {
	resource: string
	question: string
	options: string[]
	correct: number
}

export interface CardProps {
	quiz: Quiz
	statusButton: StatusButton
	getCorrectOption: string | undefined
	handleAnswer: () => void
	nextQuestion: () => void
}

export interface OptionsProps {
	value: string
	list: number
	handleAnswer: Function
	statusButton: StatusButton | any
}

export type StatusButton = "error" | "success" | "default"

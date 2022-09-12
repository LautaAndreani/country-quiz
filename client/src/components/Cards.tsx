import { Heading, Flex, Image, VStack, Stack, Box } from "@chakra-ui/react"
import { CardProps } from "../models/types"

import quizLogo from "../assets/icons/world.svg"
import { Next, Options, CardLayout } from "./index"

const Cards = ({ quiz, statusButton, getCorrectOption, handleAnswer, nextQuestion }: CardProps) => {
	return (
		<VStack position="relative" fontWeight={700}>
			<Flex marginBottom="-3rem" zIndex="1">
				<Heading color="brand.cards">COUNTRY QUIZ</Heading>
				<Image src={quizLogo} />
			</Flex>
			<CardLayout>
				<Stack margin="1rem auto" gap="2">
					<Box as="span">{quiz.resource !== "" && <Image src={quiz.resource} width="4rem" boxShadow="xl" />}</Box>
					<Heading as="h2" size="lg" color="brand.text" m="2rem 0" p={2}>
						{quiz.question}
					</Heading>
					<VStack width="100%" minH="100%" gap="5">
						{quiz.options.map((option, i) => (
							<Options
								key={i}
								value={option}
								list={i}
								handleAnswer={handleAnswer}
								statusButton={option === getCorrectOption ? statusButton : null}
							/>
						))}
						{statusButton !== "default" && <Next nextQuestion={nextQuestion} />}
					</VStack>
				</Stack>
			</CardLayout>
		</VStack>
	)
}

export default Cards

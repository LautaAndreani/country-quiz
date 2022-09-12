import { VStack, Image, Heading, Text, Button, Stack } from "@chakra-ui/react"
import winner from "../assets/icons/winner.svg"
import CardLayout from "./CardLayout"

type Props = { points: number; handleAgain: () => void }

const FinishGame = ({ points, handleAgain }: Props) => {
	return (
		<>
			<Heading color="brand.cards">COUNTRY QUIZ</Heading>
			<CardLayout>
				<Stack margin="auto">
					<VStack gap={35}>
						<Image src={winner} />
						<Heading color="brand.darkText">Results</Heading>
						<Text fontSize="1.3rem">
							You got
							<Text as="strong" color="brand.success" m="0 .3rem">
								{points}
							</Text>
							correct answers
						</Text>
						<Button
							color="brand.darkText"
							border="1px solid"
							borderColor="brand.darkText"
							bg="none"
							_hover={{}}
							size="lg"
							onClick={handleAgain}>
							Try again
						</Button>
					</VStack>
				</Stack>
			</CardLayout>
		</>
	)
}

export default FinishGame

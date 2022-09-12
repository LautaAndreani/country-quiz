import { Flex, Button } from "@chakra-ui/react"
type Props = {
	nextQuestion: () => void
}

const Next = ({ nextQuestion }: Props) => {
	return (
		<Flex justifyContent="flex-end" w="100%">
			<Button
				bg="brand.warning"
				color="white"
				fontWeight={500}
				p="10px 20px"
				_hover={{ bg: "brand.hover" }}
				onClick={nextQuestion}>
				Next
			</Button>
		</Flex>
	)
}

export default Next

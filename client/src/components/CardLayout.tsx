import { Stack } from "@chakra-ui/react"

type Props = { children: JSX.Element | JSX.Element[] }

const CardLayout = ({ children }: Props) => {
	return (
		<Stack minH="65vh" w="30rem" maxW="30rem" bg="brand.cards" borderRadius="24px" p="2rem">
			{children}
		</Stack>
	)
}

export default CardLayout

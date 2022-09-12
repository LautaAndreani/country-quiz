import { Box } from "@chakra-ui/react"
import bg from "../assets/background/background.png"

type Props = { children: JSX.Element | JSX.Element[] }

const Wrapper = ({ children }: Props) => {
	return (
		<Box
			minH="100vh"
			minWidth="100%"
			bgImage={bg}
			bgRepeat="no-repeat"
			bgPosition="center"
			bgSize="cover"
			display="flex"
			justifyContent="center"
			alignItems="center">
			{children}
		</Box>
	)
}

export default Wrapper

import { Button, Box } from "@chakra-ui/react"
import { OptionsProps } from "../models/types"

const Options = ({ value, list, handleAnswer, statusButton }: OptionsProps) => {
	const options = ["A", "B", "C", "D"]
	return (
		<Button
			w="100%"
			minHeight="6vh"
			border="1px solid"
			borderColor="brand.buttonBorder"
			variant="outline"
			display="flex"
			justifyContent="start"
			gap={10}
			color={statusButton ? "brand.cards" : "brand.buttonBorder"}
			onClick={() => handleAnswer(value)}
			_active={!statusButton ? { bg: "brand.warning" } : {}}
			_hover={statusButton && {}}
			bg={statusButton && "brand.success"}>
			<Box>{options[list]}</Box>
			{value}
		</Button>
	)
}

export default Options

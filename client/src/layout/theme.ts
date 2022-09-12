import { extendTheme } from "@chakra-ui/react"
//fonts
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/700.css"

const theme = extendTheme({
	fonts: {
		heading: `'Poppins', sans-serif`,
		body: `'Poppins', sans-serif`,
	},
	colors: {
		brand: {
			success: "#60BF88",
			warning: "#F9A826",
			error: "#EA8282",
			cards: "#FFFFFF",
			text: "#2F527B",
			darkText: "#1D355D",
			buttonBorder: "rgba(96, 102, 208, 0.8)",
			hover: "#ec9e1f",
		},
	},
})

export default theme

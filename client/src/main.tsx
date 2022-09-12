import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "./layout/theme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ChakraProvider>
)

import { Button, useToast } from "@chakra-ui/react"

function Toast() {
	const toast = useToast()
	const id = "toast"
	return (
		<>
			{!toast.isActive(id) &&
				toast({
					id,
					title: "Nice Job !",
					description: "+1",
					status: "success",
					duration: 2000,
					isClosable: true,
					position: "top-right",
				})}
		</>
	)
}

export default Toast

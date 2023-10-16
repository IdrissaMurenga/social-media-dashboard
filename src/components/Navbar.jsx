import { Heading, Text, Switch, Box} from "@chakra-ui/react"


const Navbar = ({toggleTheme}) => {
  return (
        <Box px={3} as="header" display={{base: "block", md:"flex"}} justifyContent={{md:"space-between"}}>
            <Box pb={"3"}>
                <Heading fontSize="2xl">Social Media Dashboard</Heading>
                <Text as='h3' fontSize='sm' fontWeight={"bold"} color='hsl(228, 12%, 44%)'>Total Followers : 23,004</Text>
            </Box>
            <Box className="hr" display={{ base: "block", md: "none" }} bg={"gray.200"} height={"0.1"} width={"94"}/>
            <Box pt={"3"} display={"flex"}alignItems={"center"} justifyContent={{base:"space-between"}} gap={1.5}>
                <Text fontSize='sm' fontWeight={"bold"} color='hsl(228, 12%, 44%)' >Dark Mode</Text>
                <Switch size='lg' onChange={toggleTheme} />
            </Box>
        </Box>
  )
}

export default Navbar

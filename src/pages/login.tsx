import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import loginImage from "../../public/assets/loginImage.gif"

export default function Login(){
    return(
      <Flex w="100vw" h="100vh">
        <Flex w="50vw"  bg="#2c73eb" align="center" justify="center">
          <Image w={500} h={500} src={loginImage.src}/>
        </Flex>

        <VStack w="50vw" bg="green" direction="column">
          <Heading as="h1" >Acount Login</Heading>
          <Text>If you are already a member you can login with your email address and password.</Text>
        </VStack>
      </Flex>
    )
}

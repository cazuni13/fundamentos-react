import {
  Button,
  Link as ChakraLink,
  Field,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import loginImage from "../../public/assets/loginImage.gif";

export default function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50vw" bg="#2c73eb" align="center" justify="center">
        <Image w={500} h={500} src={loginImage.src} />
      </Flex>

      <VStack w="50vw" bg="white" direction="column" justify="center">
        <Stack>
          <Heading as="h1" color="black" fontWeight="bold" fontSize="3xl">
            Account Login
          </Heading>
          <Text color="#8692A6" fontWeight="normal" fontSize="lg">
            If you are already a member you can login with your email address
            and password.
          </Text>

          <VStack align="flex-start" gap={6} mt={10}>
            <Field.Root required>
              <Field.Label color="gray.500">Email</Field.Label>
              <Input
                type="email"
                h={16}
                colorPalette="blue"
                borderRadius="md"
                color="black"
              />
            </Field.Root>

            <Field.Root required>
              <Field.Label color="gray.500">Password</Field.Label>
              <PasswordInput
                h={16}
                colorPalette="blue"
                borderRadius="md"
                color="black"
              />
            </Field.Root>

            <Checkbox
              colorPalette="blue"
              variant="solid"
              fontSize="md"
              color="gray.500"
            >
              Remember me
            </Checkbox>

            <Button
              colorPalette="blue"
              h={16}
              borderRadius="md"
              fontWeight="medium"
              fontSize="md"
              w="full"
            >
              Login
            </Button>
          </VStack>

          <HStack justify="center" gap={0.5} mt={10}>
            <Text color="gray.500">Dont have an account ?</Text>
            <ChakraLink asChild color="#2c73eb">
              <NextLink href="/sign-in">Sing up here</NextLink>
            </ChakraLink>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}

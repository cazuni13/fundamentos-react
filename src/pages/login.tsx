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
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { userAgent } from "next/server";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { GrUpdate } from "react-icons/gr";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import { useSession } from "@/contexts/SessionContext";
import loginImage from "../../public/assets/loginImage.gif";

const signInFormSchema = z.object({
  email: z
    .email()
    .nonempty("Digite um email valido")
    .nonempty("o email é obrigatório"),
  password: z
    .string()
    .nonempty("a senha é obrigatoria")
    .min(8, "a senha deve ter no minimo 8 caracteres"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function Login() {
  const { user, updateUser } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInFormSchema),
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data);
    updateUser({
      id: "teste",
      email: data.email,
      cpf: "10774603925",
      fullName: "joao",
      avatarUrl:
        "https://gravatar.com/avatar/c49b41425761b099cbb4ef7ef5a22ca3?s=400&d=robohash&r=x",
    });
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

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

          <VStack
            as="form"
            onSubmit={handleSubmit(handleSignIn)}
            align="flex-start"
            gap={6}
            mt={10}
          >
            <Field.Root invalid={!!errors.email}>
              <Field.Label color="gray.500">Email</Field.Label>
              <Input
                type="email"
                h={16}
                colorPalette="blue"
                borderRadius="md"
                color="black"
                {...register("email")}
              />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Field.Label color="gray.500">Password</Field.Label>
              <PasswordInput
                h={16}
                colorPalette="blue"
                borderRadius="md"
                color="black"
                {...register("password")}
              />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
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
              type="submit"
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

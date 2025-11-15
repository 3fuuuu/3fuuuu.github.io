import { Box, Text, Field, Input, Stack, Textarea } from "@chakra-ui/react";
import { Title } from "../../components/Title";
import { useForm, SubmitHandler } from "react-hook-form";

type form = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  return (
    <Box bg="#1f202d">
      <Stack>
        <Title>
          <p>Contact</p>
        </Title>
        <Text>何かあればこちらにお願いします。</Text>

        <Field.Root orientation="horizontal">
          <Field.Label>Name</Field.Label>
          <Input placeholder="" flex="1" />
        </Field.Root>

        <Field.Root invalid>
          <Field.Label>Email</Field.Label>
          <Input placeholder="me@example.com" flex="1" />
        </Field.Root>

        <Field.Root invalid>
          <Field.Label>Message</Field.Label>
          <Textarea placeholder="" />
        </Field.Root>
      </Stack>
    </Box>
  );
};
export default Contact;

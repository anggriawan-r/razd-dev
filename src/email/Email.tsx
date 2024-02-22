import {
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/components";

export function Email({ message, email }: { message: string; email: string }) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

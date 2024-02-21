import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email(),
  body: z.string().max(2000, {
    message: "Body text must be less than 2000 characters.",
  }),
});

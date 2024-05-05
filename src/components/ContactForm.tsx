import { formSchema } from "@/lib/validateForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";
import SubmitButton from "./SubmitButton";

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      body: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { error } = await sendEmail(values);
    if (error) {
      toast.error("Something went wrong!");
      return;
    }
    toast.success("Message has been sent successfully!");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-[512px] flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="bg-zinc-300 text-zinc-900 transition-colors placeholder:text-zinc-500 focus:bg-zinc-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Body"
                  {...field}
                  className="h-44 bg-zinc-300 text-zinc-900 transition-colors placeholder:text-zinc-500 focus:bg-zinc-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isSubmitting={form.formState.isSubmitting.valueOf()} />
      </form>
    </Form>
  );
}

export default ContactForm;

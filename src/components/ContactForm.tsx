import { formSchema } from "@/utils/validateForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { squareHovered } from "@/store/hover/hoverSlice";
import { FaPaperPlane } from "react-icons/fa6";

function ContactForm() {
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      body: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
                  className="bg-zinc-300 text-zinc-900 transition-colors placeholder:text-zinc-700 focus:bg-zinc-200"
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
                  className="h-44 bg-zinc-300 text-zinc-900 transition-colors placeholder:text-zinc-700 focus:bg-zinc-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="outline"
          type="submit"
          className="group flex w-[100px] items-center justify-center gap-2 self-center border-none font-semibold"
          onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
          onMouseLeave={() => dispatch(squareHovered(null))}
        >
          Send
          <FaPaperPlane className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;

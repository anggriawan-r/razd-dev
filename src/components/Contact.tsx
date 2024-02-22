import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="container flex min-h-screen max-w-screen-lg flex-col items-center justify-center gap-16 px-4"
    >
      <h1 className="text-3xl font-extrabold text-zinc-200 md:text-7xl">
        CONTACT ME
      </h1>
      <p className="text-base text-zinc-200">
        Please, contact me directly at{" "}
        <a
          href="mailto:anggriawan.net@gmail.com"
          className="font-semibold underline"
        >
          anggriawan.net@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <ContactForm />
    </section>
  );
}

export default Contact;

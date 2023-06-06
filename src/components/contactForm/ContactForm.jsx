import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledContactForm } from "../../components/styles/ContactForm.styled";

const schema = yup
  .object({
    fullname: yup
      .string()
      .min(3, "Your first name should be at least 3 characters.")
      .required("Please enter your first name"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
    subject: yup
      .string()
      .min(3, "Minimum number of characters is 3")
      .required("Please enter the subject"),
    body: yup
      .string()
      .min(3, "Minimum number of characters is 3, required")
      .max(1000, "Maximum number of characters is 1000")
      .typeError("Please write a message"),
  })
  .required();

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  function onSubmit(data) {
    console.log(data);
    setIsSubmitted(true);
    reset();
  }

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fullname">Full Name:</label>
        <input {...register("fullname")} id="fullname" />
        <p>{errors.fullname?.message}</p>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input {...register("email")} id="email" />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input {...register("subject")} id="subject" />
        <p>{errors.subject?.message}</p>
      </div>
      <div>
        <label htmlFor="body">Message:</label>
        <textarea {...register("body")} id="body" rows={5} cols={30} />
        <p>{errors.body?.message}</p>
      </div>
      <div>
        <input type="submit" />
        {isSubmitted && <p>Thank you for your message.</p>}
      </div>
    </StyledContactForm>
  );
}

export default ContactForm;

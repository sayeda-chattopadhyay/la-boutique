import { StyledButton, StyledLinkButton } from "../styles/Button.styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledContactForm } from "../styles/ContactForm.styled";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    fullname: yup.string().required("Please enter your full name"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
    address: yup.string().required("Please enter your address"),
    creditCard: yup
      .number()
      .typeError("Please enter a valid credit card number")
      .required("Please enter your card number"),
  })
  .required();

function PaymentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // Enable form validation on each input change
  });

  function onSubmit(data) {
    console.log(data);
    setIsSubmitted(true);
    reset();
  }

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <hr />
      <div>
        <label htmlFor="fullname">Full Name</label>
        <input {...register("fullname")} id="fullname" />
        <p>{errors.fullname?.message}</p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} id="email" />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input {...register("address")} id="address" />
        <p>{errors.address?.message}</p>
      </div>
      <div>
        <label htmlFor="creditCard">Credit card</label>
        <input
          {...register("creditCard")}
          id="creditCard"
          placeholder="xxxx xxxx xxxx xxxx"
        />
        <p>{errors.creditCard?.message}</p>
      </div>
      {isSubmitted ? (
        <Link to={"/checkoutsuccess"}>
          <StyledLinkButton>Submit</StyledLinkButton>
        </Link>
      ) : (
        <StyledButton type="submit" disabled={!isValid}>
          Submit
        </StyledButton>
      )}
    </StyledContactForm>
  );
}

export default PaymentForm;

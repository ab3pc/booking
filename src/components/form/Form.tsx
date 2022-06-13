import React from "react";
import Button from "../Button";
import FormInput from "../form-input/FormInput";

interface FormProps {
  type: "signIn" | "signUp";
  title: string;
  formSubmit: (arg: boolean) => void;
}

const Form: React.FC<FormProps> = ({ type, title, formSubmit }) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formSubmit(true);
  };
  return (
    <form className="sign-up-form" autoComplete="off" onSubmit={handleFormSubmit}>
      <h2 className="sign-up-form__title">{title}</h2>

      {type === "signUp" ? <FormInput title="Full name" name="full-name" type="text" isRequired={true} /> : null}
      <FormInput title="Email" name="email" type="email" isRequired={true} />
      <FormInput title="Password" name="password" type="password" isRequired={true} autoComplete="new-password" />

      <Button type={"submit"} title={type === "signUp" ? "Sign Up" : "Sign In"} />
    </form>
  );
};
export default Form;

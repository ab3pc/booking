import React from "react";
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

      <FormInput title="Full name" name="full-name" type="text" isRequired={true} />
      <FormInput title="Email" name="email" type="email" isRequired={true} />
      {type === "signUp" ? (
        <FormInput title="Password" name="password" type="password" isRequired={true} autoComplete="new-password" />
      ) : null}

      <button className="button" type="submit">
        {type === "signUp" ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
};
export default Form;

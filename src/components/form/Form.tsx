import React from "react";
import { changeLogin, changeName, changePassword } from "../../store/authorization-slice/authorization-slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Button from "../Button";
import FormInput from "../form-input/FormInput";

interface FormProps {
  type: "signIn" | "signUp";
  title: string;
  formSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ type, title, formSubmit }) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formSubmit();
  };

  const {login, name ,password, error} = useAppSelector(state => state.authorization);
  const dispatch = useAppDispatch();

 
  const setLogin = (text:string) => {
    dispatch(changeLogin(text))
 }

 const setPass = (text:string) => {
    dispatch(changePassword(text))
 }

 const setName = (text:string) => {
    dispatch(changeName(text))
 }

  return (
    <form className="sign-up-form" autoComplete="off" onSubmit={handleFormSubmit}>
      <h2 className="sign-up-form__title">{title}
      {error&&<span className="sign-up-form__error">{error&&`${error.error}: ${error.message}`}</span>}
      
      </h2>
     
       {type === "signUp" ? <FormInput onChange={setName} value={name} title="Full name" name="full-name" type="text" isRequired={true} /> : null}
      <FormInput onChange={setLogin} value={login} title="Email" name="email" type="email" isRequired={true} />
      <FormInput onChange={setPass} value={password} title="Password" name="password" type="password" isRequired={true} />

      <Button type={"submit"} title={type === "signUp" ? "Sign Up" : "Sign In"} />
    </form>
  );
};
export default Form;

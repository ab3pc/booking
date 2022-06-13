import React from "react";
import { Link } from "react-router-dom";
import { Form, MainSection } from "../../components";

interface SignInProps {
  formSubmit: (arg: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({ formSubmit }) => {
  return (
    <>
      <MainSection className="sign-in-page">
        <Form title="Sign In" type="signIn" formSubmit={formSubmit} />
        <span>
          Don't have an account?
          <Link to="/sign-up" className="sign-up-form__link">
            Sign Up
          </Link>
        </span>
      </MainSection>
    </>
  );
};
export default SignIn;

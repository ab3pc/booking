import React from "react";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import Form from "../../components/form/Form";
import { Link } from "react-router-dom";

interface SignUpProps {
  formSubmit: (value: boolean) => void;
  isAuth: boolean;
}

const SignUp: React.FC<SignUpProps> = ({ formSubmit, isAuth }) => {
  return (
    <>
      <Header isAuth={isAuth} />
      <MainSection className="sign-up-page">
        <Form title="Sign Up" type="signUp" formSubmit={formSubmit} />
        <span>
          Already have an account?
          <Link to="/sign-in" className="sign-up-form__link">
            Sign In
          </Link>
        </span>
      </MainSection>
    </>
  );
};
export default SignUp;

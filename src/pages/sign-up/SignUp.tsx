import React from "react";
import { Link } from "react-router-dom";
import { Form, MainSection } from "../../components";

interface SignUpProps {
  formSubmit: (value: boolean) => void;
}

const SignUp: React.FC<SignUpProps> = ({ formSubmit }) => {
  return (
    <>
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

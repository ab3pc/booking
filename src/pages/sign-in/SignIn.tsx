import React from "react";
import { Link } from "react-router-dom";
import { Form, MainSection } from "../../components";
import { signIn } from "../../store/authorization-slice/authorization-slice";
import { useAppDispatch } from "../../store/store";

const SignIn: React.FC = ({  }) => {
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    dispatch(signIn());
  }

  return (
    <>
      <MainSection className="sign-in-page">
        <Form title="Sign In" type="signIn" formSubmit={handleSignIn} />
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

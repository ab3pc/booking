import React from "react";
import { Link } from "react-router-dom";
import { Form, MainSection } from "../../components";
import { signUp } from "../../store/authorization-slice/authorization-slice";
import { useAppDispatch } from "../../store/store";

// interface SignUpProps {
//   formSubmit: (value: boolean) => void;
// }

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleSignUp = () => {
    dispatch(signUp());
  }
  return (
    <>
      <MainSection className="sign-up-page">
        <Form title="Sign Up" type="signUp" formSubmit={handleSignUp
        } />
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

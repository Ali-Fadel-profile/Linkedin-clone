import styled from "styled-components";
import googleIcon from "@images/google.svg";
import { registerUser, signInApi } from "@/redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import Error from "@/components/Error";

export default function SignUp() {
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.userState);
  const navigate = useNavigate();
  const INITIAL_FORM = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(INITIAL_FORM);
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error errorMessage={error} />;

  const emailChangeHandler = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  };
  const passwordChangeHandler = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        password: event.target.value,
      };
    });
  };

  const createUser = (event) => {
    event.preventDefault();
    dispatch(registerUser(formState.email, formState.password));
    setFormState(INITIAL_FORM);
  };

  return (
    <SignUpContainer>
      <SignUpCard>
        <Title>Sign Up</Title>
        <Subtitle>Stay updated on your professional world</Subtitle>
        <Form onSubmit={createUser}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value={formState.email}
              onChange={emailChangeHandler}
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              value={formState.password}
              onChange={passwordChangeHandler}
              placeholder="Enter your password"
              required
            />
          </FormGroup>
          <SignUpButton type="submit">Agree & Join</SignUpButton>
        </Form>
        <Separator>
          <Line />
          <Text>or</Text>
          <Line />
        </Separator>
        <GoogleSignInButton type="button" onClick={() => dispatch(signInApi())}>
          <GoogleIcon src={googleIcon} alt="Google icon" />
          Sign up with Google
        </GoogleSignInButton>
        <SignInLink>
          Already on LinkedIn? <a href="/signin">Sign in</a>
        </SignInLink>
      </SignUpCard>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f2ef;
`;

const SignUpCard = styled.div`
  width: 360px;
  padding: 24px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
  color: #0073b1;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SignUpButton = styled.button`
  background-color: #0073b1;
  color: white;
  font-size: 16px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005582;
  }
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #ddd;
`;

const Text = styled.span`
  font-size: 12px;
  color: #888;
  margin: 0 12px;
`;

const GoogleSignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
`;

const GoogleIcon = styled.img`
  width: 20px;
  margin-right: 8px;
`;

const SignInLink = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 20px;

  a {
    color: #0073b1;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

import styled from "styled-components";
import loginLogo from "@images/login-logo.svg";
import loginHero from "@images/login-hero.svg";
import googleLogo from "@images/google.svg";
import { useDispatch } from "react-redux";
import { signInApi } from "@/redux/actions/main";

function Welcome() {
  const dispatch = useDispatch();

  return (
    <Container>
      {" "}
      <Nav>
        <a href="/index.html">
          <img src={loginLogo} alt="Login logo image" />
        </a>
        <div>
          {/* <Join href="/signup">Join now</Join>
          <SignIn href="/signin">Sign in</SignIn> */}
        </div>
      </Nav>
      <Section>
        {" "}
        <Form>
          {" "}
          <h1>
            Welcome to your <br />
            professional community
          </h1>{" "}
          <Google onClick={() => dispatch(signInApi())}>
            <img src={googleLogo} alt="Google icon image" />
            Sign in with Google
          </Google>
        </Form>{" "}
        <img src={loginHero} alt="Login hero logo" />{" "}
      </Section>
    </Container>
  );
}

export default Welcome;
const Container = styled.div`
  padding: 0 16px;
  max-width: 1128px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    width: 135px;
    height: 34px;

    @media (min-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 5px 24px;
  text-align: center;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`;

const Section = styled.section`
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0;
  }
  h1 {
    width: 100%;
    font-size: 28px;
    color: #2977c9;
    font-weight: 200;
    line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 45px;
      line-height: 60px;
      text-align: left;
    }
  }

  img {
    width: 100%;
    @media (min-width: 768px) {
      max-width: 500px;
    }
  }
`;

const Form = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 900px) {
    max-width: 600px;
    align-items: start;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: auto;
  width: 100%;
  padding: 5px 0;
  max-width: 350px;
  margin-top: 30px;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%);
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: background-color 167ms;
  img {
    width: 40px;
    margin-right: 10px;
    height: 40px;
  }
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
  }
`;

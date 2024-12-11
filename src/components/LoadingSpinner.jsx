import styled, { keyframes } from "styled-components";
import logo from "@images/home-logo.svg";

function LoadingSpinner() {
  return (
    <Container>
      <Content>
        <p>Linked</p>
        <img src={logo} alt="logo image" />
      </Content>
      <Spinner>
        <Line />
      </Spinner>
    </Container>
  );
}

export default LoadingSpinner;

// Animations for the LinkedIn-style line spinner
const moveLine = keyframes`
  0% {
    transform: translateX(-25%);
  }
  50% {
    transform: translateX(125%);
  }
  100% {
    transform: translateX(-25%);
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background-color: #f3f2ef;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30vh;
  margin-bottom: 20px;

  p {
    font-size: 40px;
    font-weight: bold;
    color: #0073b1;
    margin-right: 2px;
  }

  img {
    height: 40px;
  }
`;

const Spinner = styled.div`
  position: relative;
  width: 150px;
  height: 4px;
  background-color: #e1e9ee;
  overflow: hidden;
  border-radius: 2px;
`;

const Line = styled.div`
  position: absolute;
  height: 4px;
  width: 50%;
  background-color: #0073b1;
  animation: ${moveLine} 1.2s infinite ease-in-out;
  border-radius: 2px;
`;

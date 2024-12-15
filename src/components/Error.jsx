import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Error = ({ errorMessage }) => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <Content>
        <Header>Error Occurred</Header>
        <Message>
          {errorMessage || "Something went wrong. Please try again."}
        </Message>
        <Button onClick={() => navigate("/welcome")}>Back to Home</Button>
      </Content>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f2ef;
`;

const Content = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Header = styled.h1`
  color: #ff5851;
  font-size: 24px;
  margin-bottom: 15px;
`;

const Message = styled.p`
  font-size: 16px;
  color: #333333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #0073b1;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #005582;
  }
`;

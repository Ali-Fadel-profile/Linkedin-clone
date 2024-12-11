import styled from "styled-components";

export default function RightSection() {
  return (
    <RightContainer>
      <Widget>
        <h4>LinkedIn News</h4>
        <p>Company XYZ just raised $10M in funding!</p>
      </Widget>
      <Widget>
        <h4>Who to Follow</h4>
        <p>Jane Doe</p>
        <p>Michael Brown</p>
      </Widget>
    </RightContainer>
  );
}

const RightContainer = styled.div`
  grid-area: rightsection;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    display: none;
  }
`;

const Widget = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;

  h4 {
    margin: 0;
  }

  p {
    margin: 4px 0 0 0;
  }
`;

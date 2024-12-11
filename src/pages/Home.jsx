import MainContent from "@/components/MainContent";
import RightSection from "@/components/RightSection";
import Sidebar from "@/components/Sidebar";
import styled from "styled-components";

function Home() {
  return (
    <Content>
      <Sidebar />
      <MainContent />
      <RightSection />
    </Content>
  );
}

export default Home;
const Content = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 70px;
  background-color: #f3f2ef;
  gap: 16px;
  max-width: 1170px;
  padding: 0 16px;
  display: grid;
  grid-template-areas: "sidebar main rightsection";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  @media (max-width: 900px) {
    grid-template-areas: "sidebar main";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr);
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

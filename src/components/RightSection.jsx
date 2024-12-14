import styled from "styled-components";
import feed from "@images/feed-icon.svg";
import right from "@images/right-icon.svg";
import banner from "@images/banner-image.jpg";
import follow from "@images/follow.svg";
export default function RightSection() {
  return (
    <Container>
      <FolllowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src={feed} alt="feed icon" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src={right} alt="right icon" />
        </Recommendation>
      </FolllowCard>
      <BannerCard>
        <img src={banner} alt="banner image" />
      </BannerCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: rightsection;
  height: max-content;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    display: none;
  }
`;

const FolllowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;
const Avatar = styled.div`
  background-image: url("${follow}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const BannerCard = styled(FolllowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

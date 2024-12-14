import { useSelector } from "react-redux";
import styled from "styled-components";
import imagePlaceholder from "@images/photo.svg";
import cardBgPlaceholder from "@images/card-bg.svg";
import bookmark from "@images/bookmark.svg";
import group from "@images/group.png";
import event from "@images/event.png";
export default function Sidebar() {
  const user = useSelector((state) => state.userState.user);

  const userImage = user?.photoURL;
  return (
    <SidebarContainer>
      <UserInfo>
        <CardBackground />
        <a>
          <Photo image={userImage} />
          <Link>{user ? user.displayName : "Add Name!"}</Link>
        </a>
      </UserInfo>
      <Navigation>
        <NavItem>
          <img src={bookmark} alt="bookmark icon" /> <span>Saved Items</span>
        </NavItem>
        <NavItem>
          {" "}
          <img src={group} alt="group icon" />
          <span>Groups</span>
        </NavItem>
        <NavItem>
          {" "}
          <img src={event} alt="event icon" />
         <span>Events</span> 
        </NavItem>
      </Navigation>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  grid-area: sidebar;
`;

const UserInfo = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  word-wrap: break-word;
  word-break: break-word;
  padding-bottom: 16px;
`;
const CardBackground = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: url("${cardBgPlaceholder}");
  background-position: center;
  background-size: cover;
  height: 54px;
`;
const Photo = styled.div`
  box-shadow: none;
  width: 60px;
  height: 60px;
  background-image: url("${(props) => props.image || imagePlaceholder}");
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -22px auto 12px 16px;
  border-radius: 50%;
`;
const Link = styled.div`
  padding-left: 16px;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const Navigation = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 16px;
    height: 16px;
  }
`;

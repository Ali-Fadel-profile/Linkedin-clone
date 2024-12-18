import styled from "styled-components";
import logo from "@images/home-logo.svg";
import searchIcon from "@images/search-icon.svg";
import home from "@images/nav-home.svg";
import network from "@images/nav-network.svg";
import jobs from "@images/nav-jobs.svg";
import messaging from "@images/nav-messaging.svg";
import notifactions from "@images/nav-notifications.svg";
import userIcon from "@images/user.svg";
import downIcon from "@images/down-icon.svg";
import work from "@images/nav-work.svg";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "@redux/actions/main";

function Header() {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src={logo} alt="logo image" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
            <SearchIcon>
              <img src={searchIcon} alt="search icon" />
            </SearchIcon>
          </div>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src={home} alt="home icon" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={network} alt="network icon" />

                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={jobs} alt="jobs icon" />

                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={messaging} alt="messaging icon" />

                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={notifactions} alt="notifaction icon" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="user icon" />
                ) : (
                  <img src={userIcon} alt="user icon" />
                )}

                <span>
                  Me
                  <img src={downIcon} alt="down icon" />
                </span>
              </a>
              <SignOut>
                <a onClick={signOutHandler}>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src={work} alt="work icon" />
                <span>
                  Work
                  <img src={downIcon} alt="down icon" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    width: 280px;
    @media (max-width: 900px) {
      width: 100%;
    }

    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 100%;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 767px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      @media (max-width: 900px) {
        display: none;
      }
    }
    @media (max-width: 768px) {
      min-width: 60px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled(NavList)`
  position: absolute;
  top: 50px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  cursor: pointer;
  @media (max-width: 767px) {
    position: absolute;
    top: -45px;
    right: 15px;
  }
`;
const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 575px) {
    display: none;
  }
`;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import userIcon from "@images/user.svg";
import closeIcon from "@images/close-icon.svg";
import shareImages from "@images/share-image.svg";
import shareVideo from "@images/share-video.svg";
import ReactPlayer from "react-player";
import { Timestamp } from "firebase/firestore";
import { postArticleApi } from "@redux/actions/main";

function PostModal({ showModal, closeModal }) {
  const [editorText, setEditorText] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    setAssetArea("");
    setEditorText("");
    setShareImage("");
    closeModal();
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const addImageHandler = (event) => {
    const image = event.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image , the file is a ${typeof image}`);
      return;
    } else {
      setShareImage(image);
    }
  };

  const postArticaleHandler = (event) => {
    event.preventDefault();
    if (event.target !== event.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: videoLink,
      description: editorText,
      user: user,
      timeStamp: Timestamp.now(),
    };
    dispatch(postArticleApi(payload));
    closeModalHandler();
  };
  return (
    <>
      {showModal && (
        <Container>
          <Content>
            <Header>
              <UserInfo>
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="user image" />
                ) : (
                  <img src={userIcon} alt="user icon" />
                )}
                <span>{user.displayName}</span>
              </UserInfo>
              <button onClick={closeModalHandler}>
                <img src={closeIcon} alt="close icon" />
              </button>
            </Header>
            <ShareContent>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={addImageHandler}
                    />
                    <p>
                      <label
                        style={{
                          cursor: "pointer",
                          display: "block",
                          marginBottom: "15px",
                        }}
                        htmlFor="file"
                      >
                        Select an image to share
                      </label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="img" />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        style={{ width: "100%", height: "30px" }}
                        type="text"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                        placeholder="Please input a video link"
                      />
                      {videoLink && (
                        <ReactPlayer width="100%" url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </ShareContent>{" "}
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img src={shareImages} alt="share image" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  <img src={shareVideo} alt="share video" />
                </AssetButton>
              </AttachAssets>
              <PostButton
                disabled={!editorText ? true : false}
                onClick={(event) => postArticaleHandler(event)}
              >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
}

export default PostModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 99%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
  button {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  align-items: center;
  h2 {
    line-height: 1.5;
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
  }
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    background: none;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
  svg,
  img {
    pointer-events: none;
  }
`;
const ShareContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  sv,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    line-height: 1.5;
    font-size: 16px;
    margin-left: 5px;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 16px 16px;
`;
const AssetButton = styled.button`
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  font-size: 14px;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const PostButton = styled.button`
  min-with: 60px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disabled ? "rgb(235,235,235)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgb(0,0,0,0.25)" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 500;
  font-size: 16px;
  border-radius: 30px;
  &:hover {
    background: ${(props) => (props.disabled ? "" : "#004182")};
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    border: none;
    line-height: 1.5;
  }
`;
const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

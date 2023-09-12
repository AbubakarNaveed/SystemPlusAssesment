import React, { useState } from "react";
import "../../Styles/Comments/comment.css";
import Comment from "./Comment";
import IMG from "../../assets/images/user1.png";
import Send from "../../assets/images/send.svg";
import { userData } from "../../Data";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../redux/commentSlice";

const Comments = () => {
  const comments = useSelector((state) => state.comments.commentList);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const handleCommentAdd = () => {
    if (inputText != "") {
      const newUser = {
        commentID: `${Math.random()}`,
        userID: userData.userID,
        commentParentID: null,
        name: userData.name,
        pic: userData.pic,
        likes: 0,
        comment: inputText,
      };

      dispatch(addComment(newUser));
      setInputText("");
    } else {
      alert("Write something");
    }
  };
  return (
    <div className="main__body">
      <div className="main__wrapper">
        <div className="comment__section">
          <h1>Comments</h1>
          {comments
            .filter((comment) => comment.commentParentID === null)
            .map((comment, key) => {
              return (
                <Comment
                  name={comment.name}
                  key={key}
                  likes={comment.likes}
                  pic={comment.pic}
                  commenterID={comment.userID}
                  userId={userData.userID}
                  comment={comment.comment}
                  commentID={comment.commentID}
                />
              );
            })}
          {/* <Comment
            userId={1}
            commenterID={2}
            name={"Maria"}
            likes={1}
            pic={IMG}
            comment={
              "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?"
            }
          /> */}

          <div className="comment__body">
            <div className="reply__section --main">
              <div className="reply__section__wrapper">
                <input
                  type="text"
                  placeholder="Write your comment"
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                  }}
                />
                <button onClick={() => handleCommentAdd()}>
                  <img src={Send} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

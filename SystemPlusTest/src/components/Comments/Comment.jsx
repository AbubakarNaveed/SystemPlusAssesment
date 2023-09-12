import React, { useState } from "react";
import ReplyComment from "./ReplyComment";
import Unlike from "../../assets/images/unlike.svg";
import Like from "../../assets/images/like.svg";
import Send from "../../assets/images/send.svg";
import IMG from "../../assets/images/user2.png";
import { useDispatch, useSelector } from "react-redux";
import {
  removeComment,
  addComment,
  commentLike,
} from "../../redux/commentSlice";

import "../../Styles/Comments/comment.css";
import { userData } from "../../Data";
const Comment = ({
  userId,
  pic,
  name,
  comment,
  likes,
  commenterID,
  commentID,
}) => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const handleCommentAdd = () => {
    if (inputText != "") {
      const newComment = {
        commentID: `${Math.random()}`,
        userID: userData.userID,
        commenterID: userData.userID,
        commentParentID: commentID,
        name: userData.name,
        pic: userData.pic,
        likes: 0,
        comment: inputText,
      };
      console.log(newComment);
      dispatch(addComment(newComment));
      setInputText("");
    } else {
      alert("Write something");
    }
  };
  const replyComments = useSelector((state) => state.comments.commentList);
  const handleCommentRemove = () => {
    dispatch(removeComment(commentID));
  };
  const [commentState, setCommentState] = useState({
    like: false,
    reply: false,
  });
  const handleLikeChange = async () => {
    await dispatch(
      commentLike({ commentID: commentID, likeStatus: commentState.like })
    );
    setCommentState({ ...commentState, like: !commentState.like });
  };
  const handleReplyChange = () => {
    setCommentState({ ...commentState, reply: !commentState.reply });
  };
  let rc = replyComments.filter((comment) => {
    console.log(`${comment.commentParentID} and ${commentID}`);
    comment.commentParentID === commentID;
  });
  console.log(rc);
  return (
    <div className="comment__body">
      <div className="image__section">
        <img src={pic} />
      </div>
      <div className="text__section">
        <div className="profile__name">
          <h1>{name}</h1>
          {commenterID === userId ? <p>ME</p> : <></>}
        </div>
        <div className="comment__text">
          <p>{comment}</p>
        </div>
        <div className="comment__functions">
          <div className="non__reply__section">
            <div className="like__section">
              <button
                onClick={() => {
                  handleLikeChange();
                }}
              >
                <img src={commentState.like ? Like : Unlike} />
              </button>
              <p>{likes}</p>
            </div>
            <div className="dot">
              <h1>.</h1>
            </div>
            <div className="button_section">
              <button>
                {userId != commenterID ? (
                  <p
                    className="reply"
                    onClick={() => {
                      handleReplyChange();
                    }}
                  >
                    Reply
                  </p>
                ) : (
                  <p
                    className="remove"
                    onClick={() => {
                      handleCommentRemove();
                    }}
                  >
                    Remove
                  </p>
                )}
              </button>
            </div>
          </div>
          {replyComments
            .filter((comment) => comment.commentParentID === commentID)
            .map((comment, key) => {
              return (
                <ReplyComment
                  name={comment.name}
                  key={key}
                  likes={comment.likes}
                  pic={comment.pic}
                  commenterID={comment.userID}
                  userId={userId}
                  comment={comment.comment}
                  commentID={comment.commentID}
                />
              );
            })}
          {/* <ReplyComment
            name="Alex Benjamin"
            comment="Home sweet home! I'm glad you are back. It's been two year and miss the football matches we have together. A lot has been changed since you left. Let's meet at the ground tomorrow evening?"
            pic={IMG}
            commenterID={3}
            userId={3}
          /> */}
          {commentState.reply ? (
            <div className="reply__section">
              <div className="reply__section__wrapper">
                <input
                  type="text"
                  placeholder="Write your comment"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button
                  onClick={() => {
                    handleCommentAdd();
                  }}
                >
                  <img src={Send} />
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;

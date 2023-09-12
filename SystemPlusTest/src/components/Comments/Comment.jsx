import React, { useState } from "react";
import ReplyComment from "./ReplyComment";
import Unlike from "../../assets/images/unlike.svg";
import Like from "../../assets/images/like.svg";
import Send from "../../assets/images/send.svg";
import IMG from "../../assets/images/user2.png";

import "../../Styles/Comments/comment.css";
const Comment = ({
  userId,
  pic,
  name,
  comment,
  likes,
  replies,
  commenterID,
}) => {
  const [commentState, setCommentState] = useState({
    like: false,
    reply: false,
  });
  const handleLikeChange = () => {
    setCommentState({ ...commentState, like: !commentState.like });
  };
  const handleReplyChange = () => {
    setCommentState({ ...commentState, reply: !commentState.reply });
  };
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
                  <p className="remove">Remove</p>
                )}
              </button>
            </div>
          </div>
          {}
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
                <input type="text" placeholder="Write your comment" />
                <button>
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

import React, { useState } from "react";
import Unlike from "../../assets/images/unlike.svg";
import Like from "../../assets/images/like.svg";
import Send from "../../assets/images/send.svg";
import "../../Styles/Comments/comment.css";
import { useDispatch } from "react-redux";
import { removeComment, commentLike } from "../../redux/commentSlice";
const ReplyComment = ({
  userId,
  pic,
  name,
  comment,
  likes,
  commentID,
  commenterID,
}) => {
  const [commentState, setCommentState] = useState({
    like: false,
    reply: false,
  });

  const handleReplyChange = () => {
    setCommentState({ ...commentState, reply: !commentState.reply });
  };
  const dispatch = useDispatch();
  const handleCommentRemove = () => {
    dispatch(removeComment(commentID));
  };
  const handleLikeChange = async () => {
    await dispatch(
      commentLike({ commentID: commentID, likeStatus: commentState.like })
    );
    setCommentState({ ...commentState, like: !commentState.like });
  };
  return (
    <div className="reply__comment__body">
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
                  <p className="remove" onClick={() => handleCommentRemove()}>
                    Remove
                  </p>
                )}
              </button>
            </div>
          </div>
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

export default ReplyComment;

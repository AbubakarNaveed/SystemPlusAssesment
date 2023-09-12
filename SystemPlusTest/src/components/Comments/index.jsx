import React, { useState } from "react";
import "../../Styles/Comments/comment.css";
import Comment from "./Comment";
import IMG from "../../assets/images/user1.png";
import Send from "../../assets/images/send.svg";
import { commentsData, userData } from "../../Data";
import { useSelector } from "react-redux";
const Comments = () => {
  // const [comments, setComments] = useState(commentsData);
  // const displayParentComments = (com) => {
  //   const parentComments = com.filter(
  //     (comment) => comment.commentParentID === null
  //   );
  //   return parentComments;
  // };
  // // console.log(displayParentComments(comments));
  const comments = useSelector((state) => state.comments.commentList);
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
                <input type="text" placeholder="Write your comment" />
                <button>
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

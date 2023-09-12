import User1 from "./assets/images/user1.png";
import User2 from "./assets/images/user2.png";
import User3 from "./assets/images/user3.png";
import User4 from "./assets/images/user4.png";

export const userData = {
  userID: "4",
  name: "John Doe",
  pic: User4,
};

export const commentsData = [
  {
    commentID: "1",
    userID: "1",
    commentParentID: null, //null means that the comment is stand alone comment (not a reply)
    comment:
      "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
    name: "Maria",
    pic: User1,
    likes: 0,
  },
  {
    commentID: "2",
    userID: "2",
    commentParentID: null, //null means that the comment is stand alone comment (not a reply)
    comment:
      "Home sweet home! I'm glad you are back. It's been two year and miss the football matches we have together. A lot has been changed since you left. Let's meet at the ground tomorrow evening?",
    name: "Alex Benjamin",
    pic: User2,
    likes: 0,
  },
  {
    commentID: "3",
    userID: "3",
    commentParentID: null, //null means that the comment is stand alone comment (not a reply)
    comment:
      "Home sweet home! I'm glad you are back. It's been two year and miss the football matches we have together. A lot has been changed since you left. Let's meet at the ground tomorrow evening?",
    name: "Alex Benjamin",
    pic: User3,
    likes: 0,
  },
];

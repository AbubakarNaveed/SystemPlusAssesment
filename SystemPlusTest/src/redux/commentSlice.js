import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commentsData } from "../Data";
const initialState = { commentList: commentsData };

const CommentReducers = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, { payload }) => {
      console.log(payload);
      state.commentList = [...state.commentList, payload];
    },
    removeComment: (state, { payload }) => {
      console.log(payload);
      state.commentList = state.commentList.filter(
        (comment) => comment.commentID != payload
      );
    },
    addReplyComment: (state, { payload }) => {
      console.log(payload);
      state.commentList = state.commentList.filter(
        (comment) => comment.commentID != payload
      );
    },
    commentLike: (state, { payload }) => {
      const comment = state.commentList.find(
        (comm) => comm.commentID === payload.commentID
      );
      if (!payload.likeStatus) {
        comment.likes = comment.likes + 1;
      } else {
        comment.likes = comment.likes - 1;
      }
    },
  },
});

export const { addComment, removeComment, commentLike } =
  CommentReducers.actions;
export default CommentReducers.reducer;

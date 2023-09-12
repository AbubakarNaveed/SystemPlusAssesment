import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commentsData } from "../Data";
const initialState = { commentList: commentsData };

const CommentReducers = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

export default CommentReducers.reducer;

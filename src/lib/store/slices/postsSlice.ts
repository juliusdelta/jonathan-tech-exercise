import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Post = {
  id: number;
  title: string;
  content: string;
  kudosCount: number;
};
export type PostsSlice = {
  posts: Post[];
};

const initialState: PostsSlice = {
  posts: [],
};

const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    addKudosToPost: (state, action: PayloadAction<Post>) => {
      state.posts[action.payload.id].kudosCount++;
    },
  },
});

export const { addKudosToPost } = postsSlice.actions;

export default postsSlice.reducer;

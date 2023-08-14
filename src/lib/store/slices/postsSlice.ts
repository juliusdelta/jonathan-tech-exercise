import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Post = {
  id: number;
  title: string;
  content: string;
  kudosCount: number;
  publishedAt: Date;
};

export type PostsSlice = {
  posts: Post[];
};
export type PostDraft = {
  title: string,
  content: string
}

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
    addPost: (state, action: PayloadAction<PostDraft>) => {
      const id = generateId()
      const newPost = {
        id,
        kudosCount: 0,
        title: action.payload.title,
        content: action.payload.content,
        publishedAt: new Date()
      }

      state.posts = [...state.posts, newPost]
    },
    clearPosts: (state) => {
      state.posts = [];
    },
  },
});

const generateId = () => (
  Math.floor(Math.random() * 25)
)

export const { addKudosToPost, addPost, clearPosts } = postsSlice.actions;

export default postsSlice.reducer;

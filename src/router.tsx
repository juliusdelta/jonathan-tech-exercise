import { createBrowserRouter } from "react-router-dom";
import Feed from "./pages/Feed";
import PostDetail from "./components/PostDetail/PostDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
    children: [
      {
        path: "posts/:id",
        element: <PostDetail />
      },
    ],
  },
]);

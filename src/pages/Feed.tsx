import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedPost from "../components/FeedPost/FeedPost";
import PageLayout from "../components/PageLayout/PageLayout";
import { addPost } from "../lib/store/slices/postsSlice";
import { RootState } from "../lib/store";

function Feed() {
  // Form should be refactored into it's own component with proper frontend validations
  // & error handling

  const [showPostForm, setShowPostForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const allPosts = useSelector((state: RootState) => state.postsSlice.posts)

  const handleTitle = (event: any) => {
    setTitle(event.target.value)
  }

  const handleContent = (event: any) => {
    setContent(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(addPost({ title, content }))
    // reset form
    setTitle("")
    setContent("")
  }

  return (
    <PageLayout>
      <h1 className="text-5xl font-black text-gray-700 tracking-tight border-b border-gray-400 pb-2 mb-8">
        Your feed
      </h1>
      <div className="space-y-4">
        <button onClick={() => setShowPostForm(!showPostForm)}>New Post</button>
        {/* Iterate through all the posts to render them with `<FeedPost>` */}
        {allPosts.map(p => (<FeedPost key={p.id} title={p.title} publishedAt={p.publishedAt} kudosCount={p.kudosCount}>{p.content}</FeedPost>))}
        {showPostForm && <div>
          <p>New Post</p>
          <form onSubmit={handleSubmit}>
            <label>Title: <input data-testid="titleInput" onChange={handleTitle} type="text" name="title" /></label>
            <label>Content: <input data-testid="contentInput" onChange={handleContent} type="" name="content" /></label>
            <button type="submit">Submit</button>
          </form>
          <button>Add Post</button>
        </div>
        }
      </div>

    </PageLayout>
  );
}

export default Feed;

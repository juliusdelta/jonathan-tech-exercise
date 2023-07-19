import FeedPost from "../components/FeedPost/FeedPost";
import PageLayout from "../components/PageLayout/PageLayout";

function Feed() {
  return (
    <PageLayout>
      <h1 className="text-5xl font-black text-gray-700 tracking-tight border-b border-gray-400 pb-2 mb-8">
        Your feed
      </h1>
      <div className="space-y-4">
        <FeedPost>Welcome to the ClickFunnels Forum</FeedPost>
      </div>
    </PageLayout>
  );
}

export default Feed;

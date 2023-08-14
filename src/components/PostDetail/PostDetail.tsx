import React, { PropsWithChildren } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

type Props = {
  postId: number;
};
// Use a seclector to grab the post based on past id
const PostDetail: React.FC<Props> = ({ id }) => {
  const { title, publishedAt, content, kudosCount } = useSelector()

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h1 className="text-2xl">{title}</h1>
      <p className="leading-6 text-gray-700 h-full">{children}</p>
      <p className="text-xs">{dayjs(publishedAt).format("MMMM D, YYYY")}</p>
      <p className="text-xs">{kudosCount}</p>
    </div>
  );
};

export default PostDetail;
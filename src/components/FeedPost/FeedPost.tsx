import React, { PropsWithChildren } from "react";
import dayjs from "dayjs";

type Props = {
  title: string;
  key: number;
  publishedAt: Date;
  kudosCount: number;
};

const CONTENT_MAX_LENGTH = 200;
const truncateString = (str: any) => {
  if (str.length <= CONTENT_MAX_LENGTH) {
    return str;
  } else {
    debugger;
    return str.slice(0, CONTENT_MAX_LENGTH) + "...";
  }
}

const FeedPost: React.FC<PropsWithChildren<Props>> = ({ title, kudosCount, publishedAt, children }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h1 className="text-2xl">{title}</h1>
      <p className="leading-6 text-gray-700 h-full">{children}</p>
      <p className="text-xs">{dayjs(publishedAt).format("MMMM D, YYYY")}</p>
      <p className="text-xs">{kudosCount}</p>
    </div>
  );
};

export default FeedPost;

import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.lenght) {
    return <button className="btn btn-primary">Download</button>;
  }
  return posts.map((post) => <Post key={post} post={post} />);
};

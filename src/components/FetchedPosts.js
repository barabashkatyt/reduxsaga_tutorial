import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Loading from "./Loading";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);
  if (loading) {
    return <Loading />;
  }
  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Download
      </button>
    );
  }
  return posts.map((post) => <Post key={post.id} post={post} />);
};
export default FetchedPosts;

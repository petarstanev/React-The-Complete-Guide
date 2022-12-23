import { useLoaderData } from "react-router-dom";
import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  const loderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loderData} />
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts();
}

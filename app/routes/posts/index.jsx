import { Link, useLoaderData } from "remix";

export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: "Post 1", body: "This is a test post 1." },
      { id: 2, title: "Post 2", body: "This is a test post 2." },
      { id: 3, title: "Post 3", body: "This is a test post 3." },
    ],
  };
  return data;
};

const PostItems = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <div className="page-header">
        <h1>POSTS</h1>
        <Link to="/posts/new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={post.id}>
                <h2>{post.title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostItems;

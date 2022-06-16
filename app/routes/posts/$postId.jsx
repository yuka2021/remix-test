import { useParams } from "remix";

const Post = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Post {params.postId}</h1>
    </div>
  );
};

export default Post;

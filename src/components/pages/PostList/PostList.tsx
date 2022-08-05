import { Post } from "../../../components";
import { IPosts } from "../../../utils/trpc";

type Propsy = {
  posts?: IPosts;
};
export const PostList = ({posts} :Propsy) => {
  if (!posts || posts.length === 0)
    return <div>Nothing to show</div>;
  return (
    <div>
      {posts.map((el) => (
        <Post key={el.id} {...el} />
      ))}
    </div>
  );
};
export default PostList;

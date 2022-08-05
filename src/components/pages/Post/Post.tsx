import { IPost } from "../../../utils/trpc";

export const Post = (props: IPost) => {
  const { title, description, author } = props ?? {};
  return (
    <div className="p-2 shadow-md flex flex-col">
      <div>{author?.name}</div>
      <div>{title}</div>
    </div>
  );
};

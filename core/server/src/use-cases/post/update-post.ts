import Post from "../../database/entities/post";
import IPostDb from "../../data-access/interfaces/post-db";
import IPost from "../../database/interfaces/post";

export interface IUpdatePostData {
  postDetails: Omit<IPost, "_id">;
}

export type IUpdatePost = ({
  postDetails,
}: IUpdatePostData) => Promise<Post | null>;

export default function makeUpdatePost({
  postDb,
}: {
  postDb: IPostDb;
}): IUpdatePost {
  return async function updatePost({
    postDetails,
  }: IUpdatePostData): Promise<Post | null> {
    const post = await postDb.update(postDetails);
    return post;
  };
}

import mongoose from "mongoose";
import userSchema from "../../database/schemas/user";
import adminSchema from "../../database/schemas/admin";
import postSchema from "../../database/schemas/post";
import categorySchema from "../../database/schemas/category";
import commentSchema from "../../database/schemas/comment";

import IUser from "../../database/interfaces/user";
import IAdmin from "../../database/interfaces/admin";
import IPost from "../../database/interfaces/post";
import ICategory from "../../database/interfaces/category";
import IComment from "../../database/interfaces/comment";

type IUserModel = IUser & mongoose.Document;
type IAdminModel = IAdmin & mongoose.Document;
type IPostModel = IPost & mongoose.Document;
type ICategoryModel = ICategory & mongoose.Document;
type ICommentModel = IComment & mongoose.Document;

// Models
const UserModel = mongoose.model<IUserModel>("User", userSchema);
const AdminModel = mongoose.model<IAdminModel>("Admin", adminSchema);
const PostModel = mongoose.model<IPostModel>("Post", postSchema);
const CategoryModel = mongoose.model<ICategoryModel>(
  "Category",
  categorySchema
);
const CommentModel = mongoose.model<ICommentModel>("Comment", commentSchema);

export default Object.freeze({
  UserModel,
  AdminModel,
  PostModel,
  CategoryModel,
  CommentModel,
});

export { UserModel, AdminModel, PostModel, CategoryModel, CommentModel };

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, trim: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  children: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  meta: { type: Object },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

export default commentSchema;

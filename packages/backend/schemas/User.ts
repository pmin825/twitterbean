import { Schema, Types } from "mongoose";
import * as mongoose from "mongoose";

const User = new Schema({
  handle: String,
  passwordHash: { type: String, select: false },
  posts: [{ type: Types.ObjectId, ref: "Post" }],
  following: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
  followers: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
});

mongoose.model("User", User);

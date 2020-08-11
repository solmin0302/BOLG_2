import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema({
  body: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: Schema.Types.ObjectId,
    username: String,
  },
});

export default CommentSchema;

import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema({
  body: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now,
    comments: [CommentSchema],
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;

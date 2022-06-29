import mongoose from "mongoose";

const postCommentSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
}, { timestamps: true });

export default mongoose.model("PostComment", postCommentSchema);
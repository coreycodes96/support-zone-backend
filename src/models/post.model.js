import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    group: {
        type: mongoose.Types.ObjectId,
        ref: "Group",
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    commentCount: {
        type: Number,
        default: 0,
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
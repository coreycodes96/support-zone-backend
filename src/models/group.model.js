import mongoose from "mongoose";

const groupSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    joined: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
}, { timestamps: true });

export default mongoose.model("Group", groupSchema);
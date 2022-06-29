import express from "express";
import env from "dotenv";
env.config();
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import deserializeMiddleware from "./src/middleware/deserializeMiddleware.js";
import accountRoutes from "./src/routes/Account/account.route.js";
import groupRoutes from "./src/routes/Group/group.route.js";
import postRoutes from "./src/routes/Post/post.route.js";
import postCommentRoutes from "./src/routes/PostComment/postComment.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({
    origin: "*",
    //origin: ["http://192.168.1.113:3000", "https://support-zone.vercel.app"],
    exposedHeaders: ["x-access", "x-refresh"],
}));
app.use(morgan("dev"));
app.use(deserializeMiddleware);

app.use("/api/account", accountRoutes);
app.use("/api/group", groupRoutes);
app.use("/api/post", postRoutes);
app.use("/api/post/comment", postCommentRoutes);

//Connect to mongoDB database
mongoose.connect(process.env.MONGODB_URL);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`You are connected to port ${PORT}`);
})
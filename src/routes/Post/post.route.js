import express from "express";

const router = express.Router();

//Controllers
import { showPosts } from "../../controllers/Post/ShowPosts/showPosts.controller.js";
import { createPost } from "../../controllers/Post/CreatePost/createPost.controller.js";
import { likePost } from "../../controllers/Post/LikePost/likePost.controller.js";

//Middleware
import protectUser from "../../middleware/protectUser.js";

router.get("/show/:groupId", [protectUser], showPosts);
router.post("/create", [protectUser], createPost);
router.put("/like", [protectUser], likePost);

export default router;
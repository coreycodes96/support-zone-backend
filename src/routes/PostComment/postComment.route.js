import express from "express";

const router = express.Router();

//Controllers
import { showPostComments } from "../../controllers/PostComment/ShowPostComments/showPostComments.controller.js";
import { createPostComment } from "../../controllers/PostComment/CreatePostComment/createPostComment.controller.js";
import { likePostComment } from "../../controllers/PostComment/LikePostComment/likePostComment.controller.js";

//Middleware
import protectUser from "../../middleware/protectUser.js";

router.get("/show/:id", [protectUser], showPostComments);
router.post("/create", [protectUser], createPostComment);
router.put("/like", [protectUser], likePostComment);

export default router;
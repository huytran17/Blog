import express from "express";
import makeValidator from "../../config/middlewares/validator-middleware";
import makeExpressCallback from "../../config/express-callback";

import {
  getCommentRules,
  deleteCommentRules,
  updateCommentRules,
  createCommentRules,
} from "../../data-access/controllers/user/comment/validators";
import {
  getCommentController,
  deleteCommentController,
  updateCommentController,
  createCommentController,
  getCommentsController,
} from "../../data-access/controllers/user/comment";

const commentRouter = express.Router();

commentRouter.get(
  "/:comment_id",
  makeValidator(getCommentRules),
  makeExpressCallback(getCommentController)
); // DONE

commentRouter.delete(
  "/:comment_id",
  makeValidator(deleteCommentRules),
  makeExpressCallback(deleteCommentController)
); // DONE

commentRouter.put(
  "/:comment_id",
  makeValidator(updateCommentRules),
  makeExpressCallback(updateCommentController)
); // DONE

commentRouter.post(
  "/",
  makeValidator(createCommentRules),
  makeExpressCallback(createCommentController)
); // DONE

commentRouter.get("/", makeExpressCallback(getCommentsController)); // DONE

export default commentRouter;

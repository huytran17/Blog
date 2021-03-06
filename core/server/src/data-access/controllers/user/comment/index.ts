import {
  getComment,
  deleteComment,
  updateComment,
  createComment,
  getComments,
} from "../../../../use-cases/comment";
import { logger } from "../../../../config/storage/logger";

import makeGetCommentController from "./get-comment";
import makeDeleteCommentController from "./delete-comment";
import makeUpdateCommentController from "./update-comment";
import makeCreateCommentController from "./create-comment";
import makeGetCommentsController from "./get-comments";

const getCommentsController = makeGetCommentsController({
  getComments,
  logger,
});

const createCommentController = makeCreateCommentController({
  createComment,
  logger,
});

const getCommentController = makeGetCommentController({
  getComment,
  logger,
});

const deleteCommentController = makeDeleteCommentController({
  getComment,
  deleteComment,
  logger,
});

const updateCommentController = makeUpdateCommentController({
  getComment,
  updateComment,
  logger,
});

export default Object.freeze({
  getCommentController,
  deleteCommentController,
  updateCommentController,
  createCommentController,
  getCommentsController,
});

export {
  getCommentController,
  deleteCommentController,
  updateCommentController,
  createCommentController,
  getCommentsController,
};

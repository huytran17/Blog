import { redis } from "../../config/storage/redis";
import { logger } from "../../config/storage/logger";

import { UserDb } from "../../data-access";

import makeGetUser from "./get-user";
import makeGetUserByEmail from "./get-user-by-email";
import makeDeleteUser from "./delete-user";
import makeUpdateUser from "./update-user";
import makeGetUsers from "./get-users";

const getUsers = makeGetUsers({
  userDb: UserDb,
  redis,
  logger,
});

const getUser = makeGetUser({
  userDb: UserDb,
  redis,
  logger,
});

const getUserByEmail = makeGetUserByEmail({
  userDb: UserDb,
});

const deleteUser = makeDeleteUser({
  userDb: UserDb,
});

const updateUser = makeUpdateUser({
  userDb: UserDb,
});

const userServices = Object.freeze({
  getUser,
  getUserByEmail,
  deleteUser,
  updateUser,
  getUsers,
});

export default userServices;

export { getUser, getUserByEmail, deleteUser, updateUser, getUsers };

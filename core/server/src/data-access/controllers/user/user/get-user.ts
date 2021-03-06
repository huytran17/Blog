import { Request } from "express";
import { IGetUser } from "../../../../use-cases/user/get-user";
import _ from "lodash";
import { Logger } from "winston";

export default function makeGetUserController({
  getUser,
  logger,
}: {
  getUser: IGetUser;
  logger: Logger;
}) {
  return async function getUserController(
    httpRequest: Request & { context: { validated: {} } }
  ) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { user_id } = _.get(httpRequest, "context.validated");
      const exists = await getUser({ _id: user_id });
      if (!exists) {
        throw new Error(`User ${user_id} does not exists`);
      }

      return {
        headers,
        statusCode: 200,
        body: {
          data: exists,
        },
      };
    } catch (err) {
      return {
        headers,
        statusCode: 500,
        body: {
          data: err.message,
        },
      };
    }
  };
}

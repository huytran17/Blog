import { IGetUserByEmail } from "../../../../use-cases/user/get-user-by-email";
import { Request } from "express";
import _ from "lodash";
import { Logger } from "winston";

export default function makeSignOutController({
  getUserByEmail,
}: {
  getUserByEmail: IGetUserByEmail;
}) {
  return async function signOutController(
    httpRequest: Request & { context: { validated: {} } }
  ) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { email } = _.get(httpRequest, "context.validated");
      const exists = await getUserByEmail({ email });
      if (!exists) {
        throw new Error(`User by ${email} does not exist`);
      }

      return {
        headers,
        statusCode: 200,
        body: {
          data: {
            valid_signout: true,
          },
        },
      };
    } catch (err) {
      return {
        headers,
        statusCode: 500,
        body: {
          data: err,
        },
      };
    }
  };
}

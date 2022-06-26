import mongoose from "mongoose";
import _ from "lodash";
// import audit from "./db-audit";

async function makeDb() {
  const DATABASE_URL = makeDatabaseURL();
  const DATABASE_OPTIONS = makeDatabaseOptions();

  const is_not_connected = mongoose.connection.readyState == 0;
  if (is_not_connected) {
    console.log("Setting up database...");
    await mongoose.connect(DATABASE_URL, DATABASE_OPTIONS);
    console.log("Successfully connected to DB");
  }

  // mongoose.set("debug", audit)

  return mongoose;
}

export function makeDatabaseURL(): string {
  const {
    MONGO_USERNAME = "admin",
    MONGO_PASSWORD = "Passw0rd",
    MONGO_HOSTNAME = "localhost",
    MONGO_PORT = 27017,
    MONGO_DB = "kinobi",
  } = process.env;
  const DATABASE_URL =
    process.env.DATABASE_URL ||
    `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
  return DATABASE_URL;
}

export function makeLogsDatabaseURL(): string {
  const DATABASE_URL = process.env.LOGS_DATABASE_URL;

  return DATABASE_URL || makeDatabaseURL();
}

export function makeDatabaseOptions() {
  const options = {
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
    useFindAndModify: false,
    // useUnifiedTopology: true, //if set to true, create error: "MongooseServerSelectionError: getaddrinfo ENOTFOUND mongo mongo:27017"
    useCreateIndex: true,
  };

  return options;
}

export function filterResumeByMembershipPlanLevel({
  resumes,
  membership_levels,
}: {
  resumes: any[];
  membership_levels: any[];
}): any[] {
  if (!membership_levels) {
    return [];
  }

  const filtered_resumes = resumes.filter((resume_object) => {
    const user_membership_plan_id = _.get(
      resume_object,
      "user.membership_plan_id"
    );

    if (!user_membership_plan_id) {
      return false;
    }

    const user_membership_level = _.get(resume_object, "user.membership_level");

    return (
      membership_levels.includes(user_membership_plan_id) &&
      membership_levels.includes(user_membership_level)
    );
  });

  return filtered_resumes;
}

export default makeDb;
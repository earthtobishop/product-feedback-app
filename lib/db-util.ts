import { MongoClient } from "mongodb";
const { MONGODB_URI } = process.env;

const connectDatabase = async () => {
  if (MONGODB_URI === undefined) {
    return "Please provide valid MongoDB URI";
  }

  const client = await MongoClient.connect(MONGODB_URI);
  return client;
};

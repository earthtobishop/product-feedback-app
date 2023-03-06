import { MongoClient } from "mongodb";
import { FeedbackRequest } from "./@types/feedback-request.types";
const { MONGODB_URI } = process.env;

const connectDatabase = async () => {
  const client = await MongoClient.connect(MONGODB_URI!);
  return client;
};

export const createFeedbackRequest = async (
  feedbackRequest: FeedbackRequest
) => {
  const client = await connectDatabase();
  const db = client.db("feedbackRequests");
  const createdRequest = await db
    .collection("feedbackRequests")
    .insertOne(feedbackRequest);

  return createdRequest;
};

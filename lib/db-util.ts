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

export const getFeedbackRequests = async () => {
  const client = await connectDatabase();
  const db = client.db("feedbackRequests");

  const feedbackRequests = await db
    .collection("feedbackRequests")
    .find({})
    .limit(20)
    .toArray();
  return feedbackRequests;
};

export const getFeedbackRequest = async (id: number) => {
  const client = await connectDatabase();
  const db = client.db("feedbackRequests");

  const feedbackRequest = await db.collection("feedbackRequests").findOne({
    id
  });

  return feedbackRequest;
};

export const editFeedbackRequest = async (
  id: number,
  feedbackRequest: FeedbackRequest
) => {
  const client = await connectDatabase();
  const db = client.db("feedbackRequests");

  const editedFeedbackRequest = await db
    .collection("feedbackRequests")
    .updateOne(
      {
        id
      },
      {
        $set: feedbackRequest
      }
    );

  return editedFeedbackRequest;
};

export const deleteFeedbackRequest = async (id: number) => {
  const client = await connectDatabase();
  const db = client.db("feedbackRequests");

  const feedbackRequest = await db.collection("feedbackRequests").deleteOne({
    id
  });
  return feedbackRequest;
};

import { createFeedbackRequest, getFeedbackRequests } from "@/lib/db-util";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handlePostFeedbackRequest: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    await createFeedbackRequest(req.body);
    res.json({
      msg: "Feedback Request Successfully Created",
      feedbackRequest: req.body
    });
  } catch (e) {
    console.error(e);
  }
};

const handleGetFeedbackRequests: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const feedbackRequests = await getFeedbackRequests();
    res.json(feedbackRequests);
  } catch (e) {
    console.error(e);
  }
};

async function handleRequests(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return handlePostFeedbackRequest(req, res);
    case "GET":
      return handleGetFeedbackRequests(req, res);
    default:
      res.status(405).end();
  }
}

export default handleRequests;

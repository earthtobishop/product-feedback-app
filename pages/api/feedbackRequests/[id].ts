import { getFeedbackRequest } from "@/lib/db-util";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handleGetFeedbackRequest: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const feedbackRequest = await getFeedbackRequest(Number(req.query.id));
    res.json(feedbackRequest);
  } catch (e) {
    console.error(e);
  }
};

async function handleRequests(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return handleGetFeedbackRequest(req, res);
    default:
      res.status(405).end();
  }
}

export default handleRequests;

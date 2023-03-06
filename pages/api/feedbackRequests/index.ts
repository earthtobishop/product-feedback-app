import { createFeedbackRequest } from "@/lib/db-util";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handlePostFeedbackRequest: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const feedbackRequest = await createFeedbackRequest(req.body);
    res.json({
      msg: "Feedback Request Successfully Created",
      feedbackRequest: req.body
    });
  } catch (e) {
    console.error(e);
  }
};

async function handleRequests(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return handlePostFeedbackRequest(req, res);
    default:
      res.status(405).end();
  }
}

export default handleRequests;

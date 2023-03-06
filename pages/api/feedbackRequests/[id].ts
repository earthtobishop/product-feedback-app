import { editFeedbackRequest, getFeedbackRequest } from "@/lib/db-util";
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

const handleEditFeedbackRequest: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const feedbackRequest = await editFeedbackRequest(
      Number(req.query.id),
      req.body
    );
    res.json({ msg: "Invoice update successfully", feedbackRequest: req.body });
  } catch (e) {
    console.error(e);
  }
};

async function handleRequests(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return handleGetFeedbackRequest(req, res);
    case "PUT":
      return handleEditFeedbackRequest(req, res);
    default:
      res.status(405).end();
  }
}

export default handleRequests;

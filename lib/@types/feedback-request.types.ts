import { ObjectId } from "mongodb";

export type Category =
  | "suggestion"
  | "ui"
  | "ux"
  | "enhancement"
  | "bug"
  | "feature";
type Status = "planned" | "in-progress" | "live";

export type CurrentUser = {
  image: string;
  name: string;
  username: string;
};

export type User = {
  image: string;
  name: string;
  username: string;
};

export type Reply = {
  content: string;
  replyingTo: string;
  user: User;
};

export type Comment = {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
};

export type FeedbackRequest = {
  _id?: ObjectId;
  id: number;
  title: string;
  category: Category;
  upvotes: number;
  status: Status;
  description: string;
  comments: Comment[];
};

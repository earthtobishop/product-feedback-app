import { Category } from "@/lib/@types/feedback-request.types";

export const emitFormattedCategory = (category: Category) => {
  if (category === "suggestion") {
    return "All";
  } else if (category === "ui") {
    return "UI";
  } else if (category === "ux") {
    return "UX";
  }

  return category;
};

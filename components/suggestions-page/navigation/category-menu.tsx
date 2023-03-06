import { Category } from "@/lib/@types/feedback-request.types";
import React, { Dispatch, FC, SetStateAction } from "react";
import { emitFormattedCategory } from "./utils/emit-formatted-cateogry";

type CategoryMenuProps = {
  selectedCategory: Category;
  setSelectedCategory: Dispatch<SetStateAction<Category>>;
};

const CategoryMenu: FC<CategoryMenuProps> = ({
  selectedCategory,
  setSelectedCategory
}) => {
  let categories: Category[] = [
    "suggestion",
    "bug",
    "enhancement",
    "feature",
    "ui",
    "ux"
  ];
  const selectedStyles =
    "h-[30px] w-min	flex items-center justify-center bg-[#4661E6] text-white font-semibold text-[13px] rounded-lg px-3";
  const unselectedStyles =
    "h-[30px] w-min	flex items-center justify-center bg-[#F2F4FF] text-[#4661E6] font-semibold text-[13px] rounded-lg px-3";

  return (
    <section className="grid  justify-items-center items-center place-content-center grid-rows-2 grid-flow-col bg-white h-[178px] lg:h-[166px] w-[223px] lg:w-[255px] rounded-lg p-[24px] capitalize">
      {categories.map((category) => (
        <div
          key={category}
          className={
            selectedCategory === category ? selectedStyles : unselectedStyles
          }
          onClick={() => setSelectedCategory(category)}>
          {emitFormattedCategory(category)}
        </div>
      ))}
    </section>
  );
};

export default CategoryMenu;

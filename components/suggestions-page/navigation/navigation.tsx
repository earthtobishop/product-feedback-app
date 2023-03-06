import { Category } from "@/lib/@types/feedback-request.types";
import React, { FC, useState } from "react";
import RoadmapMenu from "../roadmap-menu";
import CategoryMenu from "./category-menu";
import Logo from "./logo";
import SidebarMenu from "./sidebar";

const Navigation: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("suggestion");

  return (
    <div className="flex items-center lg:items-start flex-col md:flex-row md:gap-[9px] lg:gap-[24px] lg:flex-col md:mx-auto lg:mx-[165px] md:mt-[56px] lg:mt-[94px]">
      <Logo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && (
        <SidebarMenu
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      <div className="hidden invisible md:visible md:gap-[9px] lg:gap-[24px] md:inline-flex lg:flex-col">
        <CategoryMenu
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <RoadmapMenu planned={0} inProgress={0} live={0} />
      </div>
    </div>
  );
};

export default Navigation;

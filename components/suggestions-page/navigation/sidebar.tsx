import { Category } from "@/lib/@types/feedback-request.types";
import React, { Dispatch, FC, SetStateAction } from "react";
import RoadmapMenu from "../roadmap-menu";
import CategoryMenu from "./category-menu";

type SidebarMenuProps = {
  selectedCategory: Category;
  setSelectedCategory: Dispatch<SetStateAction<Category>>;
};

const SidebarMenu: FC<SidebarMenuProps> = ({
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <section className="inline-flex h-96 bg-slate-400 w-max items-start justify-center overflow-x-hidden">
      <nav
        id="sidenav-1"
        className="md:hidden md:invisible absolute top-[72px] right-0 z-[1035] h-full w-4/6  -translate-x-full overflow-hidden bg-gray shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute">
        <ul
          className="flex flex-col gap-[24px] justify-center items-center m-0 list-none p-[24px]"
          data-te-sidenav-menu-ref>
          <CategoryMenu
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <RoadmapMenu />
        </ul>
      </nav>
    </section>
  );
};

export default SidebarMenu;

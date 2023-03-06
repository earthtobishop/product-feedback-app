import React, { FC } from "react";
import Link from "next/link";

type RoadmapMenuProps = {
  planned: number;
  inProgress: number;
  live: number;
};

const RoadmapMenu: FC<RoadmapMenuProps> = ({
  planned = 0,
  inProgress = 0,
  live = 0
}) => {
  return (
    <section className="flex flex-col bg-white h-[178px] lg:h-[166px] w-[223px] lg:w-[255px] rounded-lg p-[24px]">
      <div className="flex justify-between">
        <h3 className="text-[18px]">Roadmap</h3>
        <Link className="text-[#4661E6] text-[13px] underline" href="/roadmap">
          View
        </Link>
      </div>
      <div className="mt-4 flex justify-between items-center text-[16px]">
        <span className="bg-[#F49F85] h-[8px] w-[8px] rounded-full"></span>
        <h1>Planned</h1>
        <h2 className="font-bold">{planned}</h2>
      </div>
      <div className="mt-2 flex justify-between items-center text-[16px]">
        <span className="bg-[#AD1FEA] h-[8px] w-[8px] rounded-full"></span>
        <h1>In-Progress</h1>
        <h2 className="font-bold">{inProgress}</h2>
      </div>
      <div className="mt-2 flex justify-between items-center text-[16px]">
        <span className="bg-[#62BCFA] h-[8px] w-[8px] rounded-full"></span>
        <h1>Live</h1>
        <h2 className="font-bold">{live}</h2>
      </div>
    </section>
  );
};

export default RoadmapMenu;

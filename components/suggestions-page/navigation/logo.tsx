import React, { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";

type LogoProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Logo: FC<LogoProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="flex items-center md:items-end justify-between h-[72px] md:h-[178px] lg:h-[137px] py-[16px] px-[24px] w-full md:w-[223px] lg:w-[255px] text-white bg-[url('/assets/suggestions/mobile/background-header.png')] md:bg-[url('/assets/suggestions/tablet/background-header.png')] lg:bg-[url('/assets/suggestions/desktop/background-header.png')] bg-no-repeat bg-cover md:rounded-lg">
      <div className="flex flex-col">
        <h1 className="text-[15px] font-bold">
          <Link href="/">Bishop App</Link>
        </h1>
        <h2 className="text-[13px] font-normal">
          <Link href="/">Feedback Board</Link>
        </h2>
      </div>
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden md:invisible">
        <img
          src={`/assets/shared/mobile/${
            sidebarOpen ? "icon-close" : "icon-hamburger"
          }.svg`}
          alt="Toggle menu"
        />
      </div>
    </nav>
  );
};

export default Logo;

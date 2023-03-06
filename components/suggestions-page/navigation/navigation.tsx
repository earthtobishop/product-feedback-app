import React, { FC, useState } from "react";
import Logo from "./logo";
import SidebarMenu from "./sidebar";

const Navigation: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex items-center flex-col">
      <Logo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && <SidebarMenu />}
    </div>
  );
};

export default Navigation;

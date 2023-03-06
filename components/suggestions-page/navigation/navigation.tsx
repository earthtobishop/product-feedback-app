import React, { FC, useState } from "react";
import Logo from "./logo";

const Navigation: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <Logo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default Navigation;

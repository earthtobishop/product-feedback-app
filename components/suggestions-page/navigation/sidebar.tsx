import React, { FC } from "react";

const SidebarMenu: FC = () => {
  return (
    <section className="inline-flex h-96 min-h-full items-start justify-center overflow-x-hidden border bg-gray-50">
      <nav
        id="sidenav-1"
        className="md:hidden md:invisible absolute top-[72px] right-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute">
        <ul
          className="flex items-center m-0 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref>
          Test
        </ul>
      </nav>
    </section>
  );
};

export default SidebarMenu;

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FooterItems from "./FooterItems";

const Header = () => {
  let [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <header className="h-[60px] bg-background border-b border-b-accent flex flex-row items-center px-4 lg:px-[165px] fixed top-0 w-screen">
      <div className="font-semibold text-3xl">KeyLinks</div>
      <nav className="ms-auto lg:flex gap-14 hidden">
        <FooterItems />
      </nav>
      <button
        className="block lg:hidden ms-auto"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon />
      </button>
      <div
        className={`fixed left-0 top-[60px] h-[calc(100vh-60px)] w-screen bg-background z-10 px-4 py-4 flex flex-col gap-8 transition-all duration-300 ${
          drawerOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <FooterItems />
      </div>
    </header>
  );
};

export default Header;

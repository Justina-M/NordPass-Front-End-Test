import { useState, useEffect } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import LogoLink from "./LogoLink";
import HeaderNav from "./HeaderNav";
import Burger from "./Burger";
import SideDrawer from "../SideDrawer/SideDrawer";
import NPLink from "../../ui/NPLink/NPLink";

import cssVars from "../../../index.scss";
import "./Header.scss";

const Header = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { breakpointSm, breakpointLg } = cssVars;
  const isBreakpointSm = useMediaQuery(`(max-width: ${breakpointSm})`);
  const isBreakpointLg = useMediaQuery(`(max-width: ${breakpointLg})`);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      setIsScrolled(scrolled);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleSideDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  return (
    <header
      className={`Header fixed-full ${isScrolled ? "Header--opaque" : ""}`}
    >
      <div className="flex space-between align-center content-width height-100">
        <LogoLink linkTo="#" />
        <nav className="flex align-center">
          <div className="flex align-center">
            {!isBreakpointLg && <HeaderNav className="flex-row" />}
            {!isBreakpointSm && (
              <NPLink to="#" className="NPLink--filled ml-3">
                Open Vault
              </NPLink>
            )}
          </div>
          {isBreakpointLg && (
            <Burger
              className="Header__burger ml-3"
              onClick={handleToggleSideDrawer}
              isActive={isSideDrawerOpen}
            />
          )}
        </nav>
      </div>
      <SideDrawer show={isBreakpointLg && isSideDrawerOpen}>
        <nav className="pt-3">
          <HeaderNav className="NavMenu--column" />
          {isBreakpointSm && (
            <NPLink to="#" className="NPLink--filled">
              Open Vault
            </NPLink>
          )}
        </nav>
      </SideDrawer>
    </header>
  );
};

export default Header;

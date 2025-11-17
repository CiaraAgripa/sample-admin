import React from "react";
import { StyledHeaderCon, StyledLeftSideCon, StyledRightSideCon, StyledSideBarToggler, StyledThemeTogglerBtn } from "./styled";
import { FiMenu } from "react-icons/fi";
import { useToggleSideBar } from "@/context/controllerContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "@/context/themeContext";
import AccountMenu from "./sections/accountMenu";

const HeaderBar = () => {
  const toggleSidebar = useToggleSideBar();
  const { isDark, toggleTheme } = useTheme();

  return (
    <StyledHeaderCon>
      <StyledLeftSideCon>
        <StyledSideBarToggler onClick={toggleSidebar}>
          <FiMenu />
        </StyledSideBarToggler>
      </StyledLeftSideCon>

      <StyledRightSideCon>
        <StyledThemeTogglerBtn onClick={toggleTheme}>{isDark ? <HiOutlineSun /> : <HiOutlineMoon />}</StyledThemeTogglerBtn>
{/* 
        <DarkBtn onClick={handleLogout}>Logout</DarkBtn> */}
        <AccountMenu />
      </StyledRightSideCon>
    </StyledHeaderCon>
  );
};

export default HeaderBar;

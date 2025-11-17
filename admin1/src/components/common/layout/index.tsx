import { useIsSideBarOpen } from "@/context/controllerContext";
import React, { ReactNode } from "react";
import { StyledLayoutCon, StyledLeftContent, StyledMainContent } from "./styled";
import SideBar from "../sideBar";
import HeaderBar from "../headerBar";
import { ModalProvider } from "@/context/modalContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const isSideBarOpen = useIsSideBarOpen();

  return (
    <ModalProvider>
      <StyledLayoutCon>
        <StyledLeftContent>
          <SideBar />
        </StyledLeftContent>

        <StyledMainContent $isSideBarOpen={isSideBarOpen}>
          <HeaderBar />
          {children}
        </StyledMainContent>
      </StyledLayoutCon>
    </ModalProvider>
  );
};

export default Layout;

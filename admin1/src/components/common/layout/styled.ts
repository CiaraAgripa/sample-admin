import styled from "styled-components";

export const StyledLayoutCon = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledLeftContent = styled.div``;

export const StyledMainContent = styled.div<{ $isSideBarOpen: boolean }>`
  flex-grow: 1;
  margin-left: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "3.5em" : "13.7em")};
  width: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "3.5em" : "13.7em")};
  transition: margin-left 0.3s ease;
  // min-height: 110vh;
  position: relative;
  width: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "calc(100% - 3.5em)" : "calc(100% - 15.5em)")};

  @media (min-width: 1441px) {
    margin-left: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "4rem" : "15.5em")};
    min-height: 100vh;
  }
`;

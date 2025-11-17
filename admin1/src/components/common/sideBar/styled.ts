import styled from "styled-components";

export const StyledSidebarCon = styled.div<{ $isSideBarOpen: boolean }>`
  width: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "3.5em" : "13.7em")};
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.card};
  display: flex;
  flex-direction: column;
  position: fixed;
  border-right: 1px solid ${({ theme }) => theme.border};
  z-index: 2;
  overflow-y: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "visible" : "auto")};
  transition: background-color 0.3s ease, border 0.3s ease, width 0.3s ease;
  padding-top: 3.7rem;

  @media (min-width: 1441px) {
    width: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "4rem" : "15.5em")};
  }
`;

// Menu

export const StyledMenuItemCon = styled.span<{ $isSideBarOpen: boolean }>`
  padding: ${({ $isSideBarOpen }) => ($isSideBarOpen ? ".4rem" : ".15rem 1rem")};
`;

export const StyledArrowRight = styled.span<{ $isAccordionOpen: boolean }>`
  margin-left: auto;
  color: ${({ theme }) => theme.text2};

  & > svg {
    transition: transform 0.2s ease;
    transform: ${({ $isAccordionOpen }) => ($isAccordionOpen ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;

export const StyledSidebarItem = styled.div<{ $isSideBarOpen: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "center" : "start")};
  gap: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "0" : "1em")};
  cursor: pointer;
  position: relative;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  width: 100%;
  font-size: 0.9rem;
  transition: background 0.3s ease, color 0.3s ease;
  background-color: transparent;

  & > span {
    color: var(--dusk-color);
    transition: color 0.3s ease-out;
    font-size: 1.25rem;
  }

  & > ${StyledArrowRight} {
    color: var(--smokegray-color);
  }

  &:hover {
    color: ${({ theme }) => theme.text3};
    background-color: var(--darkblue-hover);
  }

  @media (min-width: 1441px) {
    font-size: 1.05em;

    & > span {
      font-size: 1.2rem;
    }
  }
`;

export const StyledSubItemsWrapper = styled.div<{ $isAccordionOpen: boolean }>`
  max-height: ${({ $isAccordionOpen }) => ($isAccordionOpen ? "800px;" : "0")};
  opacity: ${({ $isAccordionOpen }) => ($isAccordionOpen ? "1" : "0")};
  transition: all 0.2s ease-in-out;
`;

export const StyledSidebarSubItem = styled.div<{ $isSideBarOpen: boolean; $isActive: boolean }>`
  padding: 0.4rem 0.8rem;
  padding-left: 3.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s ease-out;
  color: ${({ theme, $isActive }) => ($isActive ? theme.text3 : theme.text)};
  font-size: 0.9rem;
  font-size: 0.9rem;

  & > svg {
    font-size: 0.3rem;
  }

  &:hover {
    color: ${({ theme }) => theme.text3};

    & > svg {
      color: var(--skyblue-color);
    }
  }

  @media (min-width: 1441px) {
    font-size: 0.95rem;
  }
`;

export const StyledToggleButton = styled.button<{ $isSideBarOpen: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding-block: 0.8em;
  margin-inline: 0.5em;
  border-bottom: ${({ $isSideBarOpen }) => ($isSideBarOpen ? "solid 2px var(--dusk-color)" : "")};

  & > svg {
    font-size: 1.65em;
    color: var(--dusk-color);
    transition: color 0.3s ease-out;
  }

  &:hover {
    & > svg {
      color: var(--skyblue-color);
    }
  }

  @media (min-width: 1441px) {
    & > svg {
      font-size: 1.8em;
    }
  }
`;

export const StyledTooltip = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  left: 112%;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.card};
  color: var(--charcoalgray-color);
  padding: 0.4em .8em;
  white-space: nowrap;
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  transition: opacity 0.2s ease;
  z-index: 5;
  border: 2px solid ${({ theme }) => theme.border};
`;

export const StyledTooltipLabel = styled.div`
  padding-block: 0.2em;
  font-size: 1rem;

  &:hover {
    color: var(--skyblue-color);
  }
`;

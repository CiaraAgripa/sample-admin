import styled from "styled-components";

export const StyledHeaderCon = styled.div`
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.card};
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  align-items: center;
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.3s ease, border 0.3s ease;
  position: relative;
`;

export const StyledLeftSideCon = styled.div``;

export const StyledRightSideCon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledSideBarToggler = styled.button`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.fill4};
  color: ${({ theme }) => theme.text};
  padding: 0.6rem;
  border-radius: 10rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: var(--solid-purple-color);
  }
`;

export const StyledThemeTogglerBtn = styled.button`
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.fill4};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
  border-radius: 10rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: var(--solid-purple-color);
  }
`;

// Account Menu

export const StyledAccountDropdown = styled.div``;

export const StyledAccountMenuBtn = styled.button`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.fill4};
  color: ${({ theme }) => theme.text};
  padding: 0.4rem;
  border-radius: 10rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: var(--solid-purple-color);
  }
`;

export const StyledAccountMenu = styled.div<{ $isMenuOpen: boolean }>`
  position: absolute;
  top: 110%;
  right: 0.5rem;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.35rem;
  z-index: 10;
  width: 12rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* Animation styles */
  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 1 : 0)};
  transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "translateY(0)" : "translateY(-10px)")};
  pointer-events: ${({ $isMenuOpen }) => ($isMenuOpen ? "auto" : "none")};
  transition: opacity 0.25s ease, transform 0.25s ease;

  @media (min-width: 1441px) {
    width: 13rem;
  }
`;


export const StyledAccountItem = styled.div`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background-color 0.3s ease, border 0.3s ease, color: 0.3s ease;

  & > svg {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.fill1};
  }
`;

export const StyledLogOutBtn = styled.div`
  padding: 0.5rem 1rem;
  color: var(--solid-red-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  background-color: transparent;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background-color 0.3s ease, border 0.3s ease;

  & > svg {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.fill1};
  }
`;

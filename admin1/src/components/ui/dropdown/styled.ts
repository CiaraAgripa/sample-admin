import styled from "styled-components";

export const StyledDropdownWrapper = styled.div`
  border: 1px solid #424e5a;
  border-radius: 0.35rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  & > span {
    color: ${({ theme }) => theme.text};
    font-size: 0.85rem;
  }
`;

export const StyledDropdown = styled.button<{ $isOpen: boolean }>`
  background-color: #424e5a;
  background-image: var(--btn-img-gradient);
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: var(--box-shadow);
  height: 100%;
  width: 100%;
  padding: 0.4rem;
  min-width: 8.3rem;
  width: 100%;

  & > svg {
    color: var(--white-color);
    transition: all 0.3s ease;
    transform: ${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
    font-size: 1rem;
  }

  &:hover {
    background-color: #3b4651;
  }
`;

export const StyledLabelWrapper = styled.div`
  color: var(--white-color);
  display: flex;
  gap: 0.3rem;
  font-size: 0.9rem;
`;

export const StyledDropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 130%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  z-index: 10;
  flex-direction: column;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-10px)")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: all 0.3s ease;
`;

export const StyledDropdownItem = styled.div`
  cursor: pointer;
  padding: 0.3rem;
  background-color: transparent;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;

  &:hover {
    background-color: ${({ theme }) => theme.fill1};
  }
`;

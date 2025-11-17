import styled from "styled-components";

export const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0;
`;

export const StyledPaginationCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
`;

export const StyledPaginationBtn = styled.button`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  & > svg {
    font-size: 0.95rem;
  }

  &:hover:not(:disabled) {
    ${({ theme }) => theme.text3}
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.border};
  }
`;

export const StyledPaginationNumber = styled(StyledPaginationBtn)<{ $active?: boolean }>`
  min-width: 2.2rem;
  justify-content: center;
  transition: all 0.3s ease;

  ${({ $active, theme }) =>
    $active &&
    `
      background-color: var(--solid-purple-color);
      color: white;
      border-color: ${theme.border};
    `}
`;

export const StyledPaginationCurrent = styled.span`
  font-weight: 600;
`;

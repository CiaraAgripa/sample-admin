import { BlueBtn, GrayBtn, PurpleBtn, RedBtn, StyledCardCon, StyledCardHeader } from "@/styles/styled/reusableStyled";
import styled from "styled-components";

export const StyledUserListCon = styled(StyledCardCon)``;

export const StyledUserListHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text4};
  }
`;

export const StyledLeftHeaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledSearchCon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border2};
  border-radius: 0.35rem;
  padding: 0.4rem 0.8rem;
  width: 100%;
  max-width: 16rem;
  transition: all 0.3s ease;

  & > svg {
    color: ${({ theme }) => theme.text};
    font-size: 1.1rem;
    margin-right: 0.5rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &: hover {
      color: var(--solid-purple-color);
    }
  }
`;

export const StyledSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
`;

export const StyledCreateUserBtn = styled(PurpleBtn)`
  padding: 0.4rem 0.8rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1rem;
`;

export const StyledActionsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StyledEditUserBtn = styled(BlueBtn)`
  padding: 0.25rem 0.8rem;
  font-size: 0.95rem;
`;

export const StyledDeleteUserBtn = styled(RedBtn)`
  padding: 0.25rem 0.8rem;
  font-size: 0.95rem;
`;

export const StyledMemberDropdown = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  gap: 0.5rem;

  & > p {
    white-space: nowrap;
  }
`;

export const StyledSortOrderBtn = styled(GrayBtn)`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  border-radius: var(--border-radius);
  padding: 0 0.6rem;
  gap: 0.5rem;
`;

import { FormInput, FormLabel, PurpleBtn, StyledCardHeader, StyledDarkOutlineBadge, StyledGreenOutlineBadge } from "@/styles/styled/reusableStyled";
import styled from "styled-components";

export const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.3rem;
  width: 100%;
  justify-content: space-between;
`;

export const StyledLeftContentWrapper = styled.div`
  display: flex;
  gap: 0.9rem;
`;

export const StyledMemberDetailsTab = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledMemberDetailsBtn = styled.button`
  border: 1px solid var(--solid-purple-color);
  padding: 0.2rem 0.5rem;
  color: var(--solid-purple-color);
  border-radius: var(--border-radius);
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: var(--solid-purple-color);
  }

  &.active {
    color: white;
    background: var(--solid-purple-color);
    cursor: default;
    pointer-events: none;
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.3s ease;
`;

export const StyledUserDetailsHeader = styled(StyledCardHeader)`
  padding: 1rem 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text4};
    transition: color 0.3s ease;
  }
`;

export const StyledEditUserDetails = styled(PurpleBtn)`
  padding: 0.25rem 0.8rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1rem;
`;

export const StyledMemberDetailsWrapper = styled.div``;

export const StyledMemberDetailsCardLayout = styled.div``;

export const StyledFirstRowCon = styled.div`
  display: grid;
  gap: 1.3rem;
  width: 100%;
  grid-template-columns:
    minmax(0, 65%)
    minmax(0, 35%);
`;

export const StyledSecondRowCon = styled.div`
  display: grid;
  gap: 1.3rem;
  width: 100%;
  grid-template-columns:
    minmax(0, 65%)
    minmax(0, 35%);
  padding-top: 1.3rem;
`;

// Basic Info

export const StyledBasicInfoWrapper = styled.div`
  padding: 1rem 1.5rem;
`;

export const StyledMemberDetailsFormWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const StyledStatusCon = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 1.5rem;
`;

export const StyledBasicInfoLabel = styled(FormLabel)`
  width: 100%;
  font-size: 0.95rem;
  flex: 1 1 calc((100% - 2rem) / 2);
`;

export const StyledBasicInfoInput = styled(FormInput)`
  width: 100%;
  padding: 0.3rem 0.5rem;
  background-color: ${({ theme }) => theme.fill3};
  cursor: disable;
  outline: none;
  box-shadow: none;
`;

export const StyledBasicInfoLabel2 = styled(FormLabel)`
  width: 100%;
  font-size: 0.95rem;
  flex: 1 1 calc((100% - 2rem) / 3);
`;

export const StyledRoleLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
`;

export const StyledRoleInput = styled.input`
  width: 100%;
  padding: 0.3rem 0.5rem;
  border-radius: var(--border-radius);
  border-width: 1px;
  border-style: solid;
`;

export const StyledStatusLabel = styled.div`
  color: ${({ theme }) => theme.text};
  width: 100%;

  & > p {
    font-size: 0.95rem;
    padding-bottom: .5rem;
  }
`;

export const StyledActiveBadge = styled(StyledGreenOutlineBadge)`
  width: 100%;
  font-size: 0.95rem;
  padding: 0.3rem 0.5rem;
`;

export const StyledFallbackBadge = styled(StyledDarkOutlineBadge)`
  width: 100%;
  font-size: 0.95rem;
  padding: 0.3rem 0.5rem;
`;

export const StyledMemberDetailsText = styled.h1``;

//

export const StyledPermissionWrapper = styled.div`
  padding-top: 1rem;
`;

export const StyledPermissionTitle = styled.p`
  color: ${({ theme }) => theme.text};
`;

export const StyledPermissionCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const StyledPermissionGroupWrapper = styled.div`
  flex: 1 1 calc((100% - 2rem) / 2);
  max-width: calc((100% - 2rem) / 2);
`;

export const StyledPermissionGroup = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
`;

export const StyledPermissionActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
`;

// member logs

import { StyledCardCon, StyledCardHeader, StyledMainCon } from "@/styles/styled/reusableStyled";
import styled from "styled-components";

export const StyledContentmanagementCon = styled(StyledMainCon)`
  display: grid;
  grid-template-columns:
    minmax(0, 65%)
    minmax(0, 35%);
  gap: 1.3rem;
  padding-bottom:
`;

export const StyledContentCardHeader = styled(StyledCardHeader)`
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

export const StyledMainConentManagement = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledPostContainter = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 69vh;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledPostContent = styled.div`
  padding: 1rem;
`;

export const StyledWritePostCon = styled(StyledCardCon)`
  margin-bottom: 1rem;
`;

export const StyledSideConentManagement = styled.div``;

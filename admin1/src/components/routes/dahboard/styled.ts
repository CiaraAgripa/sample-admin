import { OutlineBtn, PurpleBtn, StyledCardCon, StyledCardHeader, StyledTitle } from "@/styles/styled/reusableStyled";
import styled from "styled-components";

// KPI

export const StyledMiniGraphCon = styled.div`
  display: flex;
  gap: 1.3rem;
  width: 100%;
`;

export const StyledKPICon = styled(StyledCardCon)`
  width: 100%;
  flex: 1 1 calc(33.33% - 1rem);
  max-width: calc(33.33% - 0.9rem);
`;

export const StyledMiniGraphContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1.4rem 2rem 0.5rem 2rem;
  align-items: center;
`;

export const StyledMiniGraphTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledMiniGraphTitle = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.title};
  transition: color 0.3s ease;
`;

export const StyledMiniGraphSubTitle = styled.p`
  color: ${({ theme }) => theme.text4};
  font-size: 0.9rem;
  transition: color 0.3s ease;
`;

export const StyledMiniGraphIcon = styled.div`
  background-color: ${({ theme }) => theme.fill2};
  transition: background-color 0.3s ease;
  color: var(--solid-purple-color);
  font-size: 2rem;
  padding: 0.8rem;
  border-radius: var(--border-radius);
`;

export const StyledChartCon = styled.div`
  height: 100%;
  max-height: 4.2rem;
`;

// Revenues

export const StyledChartWrapper = styled.div`
  padding-top: 1.3rem;
  display: flex;
  gap: 1.3rem;
  width: 100%;
`;

export const StyledGraphCon = styled(StyledCardCon)`
  flex: 1 1 calc(50% - 1rem);
  max-width: calc(50% - 0.9rem);
`;

export const StyledRevenueHeader = styled(StyledCardHeader)`
  padding: 1.1rem 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text4};
  }
`;

export const StyledRevenueChartCon = styled.div`
  padding: 1.5rem 2rem;
  width: 100%;
  height: 100%;
  max-height: 22.5em;
`;

export const StyledChartViewBtnCon = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StyledChartViewBtn = styled(OutlineBtn)<{ $active: boolean }>`
  padding: 0.3rem 0.75rem;
  border-radius: 0.35rem;
  font-size: 14px;
  background-color: ${({ $active, theme }) => ($active ? theme.border : "transparent")};

  &:disabled {
    pointer-events: none;
  }
`;

// Others

export const StyledNonGraphWrapper = styled.div`
  padding-top: 1.3rem;
  display: grid;
  gap: 1.3rem;
  width: 100%;
  grid-template-columns:
    minmax(0, 35%)
    minmax(0, 65%);
`;

export const StyledNonGraphCon = styled(StyledCardCon)``;

// New Users

export const StyledNewUserBtn = styled(PurpleBtn)`
  padding: 0.25rem .8rem;
`;

export const StyledNewUserTableCon = styled.div`
  padding: .4rem 1rem 1rem 1rem;
`;

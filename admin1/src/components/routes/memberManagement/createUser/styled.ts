import { FormInput, FormLabel, GreenBtn, PurpleBtn, StyledCardHeader, StyledTitle } from "@/styles/styled/reusableStyled";
import styled from "styled-components";

export const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.3rem;
`;

export const StyledCreateUserTitle = styled.h2`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.3s ease;
`;

export const StyledBackButton = styled.button`
  color: ${({ theme }) => theme.text2};
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.text3};
  }
`;

export const StyledCreateUserHeader = styled(StyledCardHeader)`
  padding: 0.9rem 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    font-size: 1.05rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text4};
    transition: color 0.3s ease;
  }

  & > p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text2};
    transition: color 0.3s ease;
  }
`;

export const StyledCreateUserInfoCon = styled.div`
  padding: 0 1.3rem 0.95rem 1.3rem;
`;

export const StyledCreateUserHeader2 = styled.div`
  color: ${({ theme }) => theme.text4};
  display: flex;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.border};
  gap: 0.5rem;
  font-size: 1rem;
  padding-bottom: 0.2rem;
  transition: all 0.3s ease;
`;

export const StyledCreateUserFormWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0.8rem;
`;

export const StyledCreateUserLabel = styled(FormLabel)`
  width: 100%;
  font-size: 0.95rem;
`;

export const StyledCreateUserInput = styled(FormInput)`
  width: 100%;
  padding: 0.3rem 0.5rem;
`;

export const StyledCreateUserFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.1rem;
  width: 100%;
  border-top: solid 1px ${({ theme }) => theme.border};
`;

export const StyledSubmitNewUser = styled(PurpleBtn)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
`;

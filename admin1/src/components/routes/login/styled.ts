import { DarkBtn, FormInput, FormLabel } from "@/styles/styled/reusableStyled";
import styled from "styled-components";

export const StyledLoginCon = styled.div`
  background: linear-gradient(135deg, #6735cc -15%, #431f88 50%, #2e1566 110%);
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const StyledLoginCard = styled.div`
  background-color: ${({ theme }) => theme.body};
  width: 100%;
  max-width: 30rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1rem 0 1rem 0;
`;

export const StyledLoginTitle = styled.h1`
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-size: 2.3rem;
  font-weight: bold;
  padding-bottom: 1rem;
`;

export const StyledSubTitle = styled.h1`
  color: ${({ theme }) => theme.text3};
  text-align: center;
  font-size: 0.95rem;
`;

export const StyledLoginLabel = styled(FormLabel)`
  font-size: 0.9rem;
`;

export const StyledLoginInput = styled(FormInput)`
  padding: 0.6rem 1rem;
  font-size: 1rem;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text2};
  font-size: 1.3rem;

  &:hover {
    color: ${({ theme }) => theme.text3};
  }
`;

export const StyledLoginBtn = styled(DarkBtn)`
  padding: 0.5rem;
  font-size: 1.15rem;
  margin-top: 0.5rem;
`;

export const StyledSignUpBtn = styled.button`
  color: var(--solid-purple-color);
  font-weight: bold;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background: var(--solid-purple-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const StyledThemeTogglerBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 0.7rem;
  font-size: 1.5rem;
  border-radius: 25px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.6rem;
  }
`;

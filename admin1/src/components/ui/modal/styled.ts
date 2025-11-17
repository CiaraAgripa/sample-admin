import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const scaleOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9); }
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const StyledModalBackdrop = styled.div<{ closing?: boolean }>`
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  ${({ closing }) =>
    closing
      ? css`
          animation: ${fadeOut} 0.1s ease-in-out forwards;
        `
      : css`
          animation: ${fadeIn} 0.1s ease-in-out forwards;
        `}
`;

export const StyledModalCon = styled.div<{ closing?: boolean }>`
  z-index: 20;
  background-color: var(--white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;

  ${({ closing }) =>
    closing
      ? css`
          animation: ${scaleOut} 0.15s ease-in-out forwards;
        `
      : css`
          animation: ${scaleIn} 0.15s ease-in-out forwards;
        `}

  & > button {
    margin-left: auto;
    color: var(--pink-color);
    font-size: 1.5rem;
    transition: color 0.3s ease-out;

    &:hover {
      color: var(--pink-hover);
    }
  }
`;

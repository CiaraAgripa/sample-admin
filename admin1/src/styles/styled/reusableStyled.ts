import styled from "styled-components";

// buttons

export const DarkBtn = styled.button`
  background-color: ${({ theme }) => theme.darkBtnBg};
  background-image: var(--btn-img-gradient);
  border: 1px solid ${({ theme }) => theme.darkBtnBg};
  color: ${({ theme }) => theme.body};
  border-radius: var(--border-radius);
  transition: background-color 0.3s ease, border 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.darkBtnBgH};
  }
`;

export const GrayBtn = styled.button`
  background-color: #424e5a;
  background-image: var(--btn-img-gradient);
  border-color: 1px solid #424e5a;
  color: var(--white-color);
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #3b4651;
  }
`;

export const PurpleBtn = styled.button`
  background-color: #7e67fe;
  background-image: var(--btn-img-gradient);
  border-color: 1px solid var(--solid-purple-color2);
  color: var(--white-color);
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: var(--border-radius);

  &:hover {
    background-color: #715de5;
  }
`;

export const RedBtn = styled.button`
  background-color: #ed321f;
  background-image: var(--btn-img-gradient);
  border-color: 1px solid #ed321f;
  color: var(--white-color);
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: var(--border-radius);

  &:hover {
    background-color: #d52d1c;
  }
`;

export const BlueBtn = styled.button`
  background-color: #1ab0f8;
  background-image: var(--btn-img-gradient);
  border-color: 1px solid #1ab0f8;
  color: var(--white-color);
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: var(--border-radius);

  &:hover {
    background-color: #179edf;
  }
`;

export const GreenBtn = styled.button`
  background-color: #21d760;
  background-image: var(--btn-img-gradient);
  border-color: 1px solid #21d760;
  color: var(--white-color);
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: var(--border-radius);

  &:hover {
    background-color: #1ec256;
  }
`;

export const OutlineBtn = styled.button`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease, border 0.3s ease;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.border};
  }
`;

// Titles and text

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  font-size: 1.1rem;
  padding-bottom: 1.3rem;
`;

// inputs and label

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;

export const FormInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border2};
  border-radius: var(--border-radius);
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.text};
  }
`;

// containers

export const StyledMainCon = styled.div`
  padding: 1.3rem;
`;

// card

export const StyledCardCon = styled.div`
  background-color: ${({ theme }) => theme.card};
  border: 3px double ${({ theme }) => theme.border};
  border-radius: var(--border-radius);
  transition: background-color 0.3s ease, border 0.3s ease;
`;

export const StyledCardHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
`;

// table

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "NexonFootballGothic", sans-serif;
  font-size: 14px;
`;

export const StyledTableHeader = styled.th`
  text-align: left;
  padding: 0.8rem 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text4};
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const StyledTableHeader2 = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.fill3};
  color: ${({ theme }) => theme.text4};
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const StyledTableRow = styled.tr``;

export const StyledTableCell = styled.td`
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  transition: all 0.3s ease;
`;

// badge

export const StyledGreenBadge = styled.span`
  color: #21d760;
  background-color: rgba(33, 215, 96, 0.2);
  background-image: var(--btn-img-gradient);
  font-size: 0.8rem;
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
`;

export const StyledRedBadge = styled.span`
  color: #ed321f;
  background-color: rgba(237, 50, 31, 0.2);
  background-image: var(--btn-img-gradient);
  font-size: 0.8rem;
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
`;

export const StyledOrangeBadge = styled.span`
  color: #f0934e;
  background-color: rgba(240, 147, 78, 0.2);
  background-image: var(--btn-img-gradient);
  font-size: 0.8rem;
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
`;

export const StyledPurpleBadge = styled.span`
  color: #7e67fe;
  background-color: rgba(126, 103, 254, 0.2);
  background-image: var(--btn-img-gradient);
  font-size: 0.8rem;
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
`;

export const StyledBlueBadge = styled.span`
  color: #1ab0f8;
  background-color: rgba(26, 176, 248, 0.2);
  background-image: var(--btn-img-gradient);
  font-size: 0.8rem;
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
`;

export const StyledDarkBadge = styled.span`
  color: ${({ theme }) => theme.text3};
  background-color: ${({ theme }) => theme.darkBtnRGB};
  background-image: var(--btn-img-gradient);
  font-size: 0.8rem;
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
`;

export const StyledGreenOutlineBadge = styled.span`
  color: var(--solid-green-color);
  background-image: var(--btn-img-gradient);
  background-color: transparent;
  border: 1px solid var(--solid-green-color);
  font-size: 0.8rem;
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
`;

export const StyledDarkOutlineBadge = styled.span`
  color: ${({ theme }) => theme.text3};
  background-image: var(--btn-img-gradient);
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.darkBtnBgH};
  font-size: 0.8rem;
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
`;

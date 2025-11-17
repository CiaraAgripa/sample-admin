import { StyledBlueBadge, StyledDarkBadge, StyledGreenBadge, StyledGreenOutlineBadge, StyledOrangeBadge, StyledPurpleBadge, StyledRedBadge } from "@/styles/styled/reusableStyled";
import { write } from "fs";

export const StatusBadge: Record<string, React.FC<{ children?: React.ReactNode }>> = {
  verified: ({ children }) => <StyledGreenBadge>{children}</StyledGreenBadge>,
  blocked: ({ children }) => <StyledRedBadge>{children}</StyledRedBadge>,
  pending: ({ children }) => <StyledOrangeBadge>{children}</StyledOrangeBadge>,
};

export const StatusAnnouncementBadge: Record<string, React.FC<{ children?: React.ReactNode }>> = {
  active: ({ children }) => <StyledGreenBadge>{children}</StyledGreenBadge>,
  expired: ({ children }) => <StyledRedBadge>{children}</StyledRedBadge>,
  draft: ({ children }) => <StyledOrangeBadge>{children}</StyledOrangeBadge>,
};

export const PermissionBadge: Record<string, React.FC<{ children?: React.ReactNode }>> = {
  read: ({ children }) => <StyledPurpleBadge>{children}</StyledPurpleBadge>,
  delete: ({ children }) => <StyledRedBadge>{children}</StyledRedBadge>,
  write: ({ children }) => <StyledOrangeBadge>{children}</StyledOrangeBadge>,
  config: ({ children }) => <StyledBlueBadge>{children}</StyledBlueBadge>,
  backup: ({ children }) => <StyledDarkBadge>{children}</StyledDarkBadge>,
  // backup
};

export const OutlineStatusBadge: Record<string, React.FC<{ children?: React.ReactNode }>> = {
  active: ({ children }) => <StyledGreenOutlineBadge>{children}</StyledGreenOutlineBadge>,
};

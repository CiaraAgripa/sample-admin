import { StyledCardCon, StyledDarkBadge } from "@/styles/styled/reusableStyled";
import { TGetAdminDetails } from "@/types/mainSchema";
import React, { useMemo } from "react";
import {
  StyledUserDetailsHeader,
  StyledBasicInfoWrapper,
  StyledMemberDetailsFormWrapper,
  StyledBasicInfoLabel,
  StyledBasicInfoInput,
  StyledPermissionCon,
  StyledPermissionGroup,
  StyledPermissionActions,
  StyledPermissionGroupWrapper,
  StyledMemberDetailsCardLayout,
  StyledFirstRowCon,
  StyledSecondRowCon,
  StyledRoleLabel,
  StyledStatusLabel,
  StyledRoleInput,
  StyledStatusCon,
  StyledBasicInfoLabel2,
  StyledActiveBadge,
  StyledFallbackBadge,
} from "../styled";
import { formatDateTime, formatDisplayName, getRoleClass, groupPermissions } from "@/utilities/mainUtils";
import { PermissionBadge } from "@/dictionary/dictionary";

const MemberProfile = ({ adminDetails }: { adminDetails: TGetAdminDetails }) => {
  if (!adminDetails) return;

  const groupedPermissions = useMemo(() => groupPermissions(adminDetails?.permissions), [adminDetails?.permissions]);

  return (
    <StyledMemberDetailsCardLayout>
      <StyledFirstRowCon>
        <StyledCardCon>
          <StyledUserDetailsHeader>
            <p>Basic Information</p>

            {/* <StyledEditUserDetails>
    <LuFilePen />
    Edit
  </StyledEditUserDetails> */}
          </StyledUserDetailsHeader>

          <StyledBasicInfoWrapper>
            <StyledMemberDetailsFormWrapper>
              <StyledBasicInfoLabel>
                Name
                <StyledBasicInfoInput value={adminDetails.name} readOnly />
              </StyledBasicInfoLabel>

              <StyledBasicInfoLabel>
                Email
                <StyledBasicInfoInput value={adminDetails.email} readOnly />
              </StyledBasicInfoLabel>

              <StyledBasicInfoLabel>
                Employee ID
                <StyledBasicInfoInput value={adminDetails.employeeId} readOnly />
              </StyledBasicInfoLabel>

              <StyledBasicInfoLabel>
                Department
                <StyledBasicInfoInput value={adminDetails.department} readOnly />
              </StyledBasicInfoLabel>
            </StyledMemberDetailsFormWrapper>
          </StyledBasicInfoWrapper>
        </StyledCardCon>

        <StyledCardCon>
          <StyledUserDetailsHeader>
            <p>Roles Status</p>
          </StyledUserDetailsHeader>

          <StyledBasicInfoWrapper>
            <StyledRoleLabel>
              Role
              <StyledRoleInput className={getRoleClass(adminDetails.role)} value={formatDisplayName(adminDetails.role) || "No recent records"} readOnly />
            </StyledRoleLabel>

            <StyledStatusCon>
              <StyledStatusLabel>
                <p>Status</p>
                {adminDetails.status === "active" ? (
                  <StyledActiveBadge>{adminDetails.status}</StyledActiveBadge>
                ) : (
                  <StyledFallbackBadge>{adminDetails.status}</StyledFallbackBadge>
                )}
              </StyledStatusLabel>

              <StyledStatusLabel>
                <p>Is Active?</p>
                {adminDetails.isActive ? <StyledActiveBadge>Yes</StyledActiveBadge> : <StyledFallbackBadge>No</StyledFallbackBadge>}
              </StyledStatusLabel>
            </StyledStatusCon>
          </StyledBasicInfoWrapper> 
        </StyledCardCon>
      </StyledFirstRowCon>

      <StyledSecondRowCon>
        <StyledCardCon>
          <StyledUserDetailsHeader>
            <p>Activity and Metadata</p>
          </StyledUserDetailsHeader>

          <StyledBasicInfoWrapper>
            <StyledMemberDetailsFormWrapper>
              <StyledBasicInfoLabel2>
                Last Login
                <StyledBasicInfoInput value={formatDateTime(adminDetails.lastLoginAt || "No recent records")} readOnly />
              </StyledBasicInfoLabel2>

              <StyledBasicInfoLabel2>
                Approved At
                <StyledBasicInfoInput value={adminDetails.approvedAt || "No recent records"} readOnly />
              </StyledBasicInfoLabel2>

              <StyledBasicInfoLabel2>
                Approved By
                <StyledBasicInfoInput value={adminDetails.approvedBy} readOnly />
              </StyledBasicInfoLabel2>

              <StyledBasicInfoLabel2>
                Account Created
                <StyledBasicInfoInput value={formatDateTime(adminDetails.createdAt)} readOnly />
              </StyledBasicInfoLabel2>

              <StyledBasicInfoLabel2>
                Last Updated
                <StyledBasicInfoInput value={formatDateTime(adminDetails.updatedAt || "No recent records")} readOnly />
              </StyledBasicInfoLabel2>

              <StyledBasicInfoLabel2>
                User ID
                <StyledBasicInfoInput value={adminDetails.id} readOnly />
              </StyledBasicInfoLabel2>
            </StyledMemberDetailsFormWrapper>
          </StyledBasicInfoWrapper>
        </StyledCardCon>

        <StyledCardCon>
          <StyledUserDetailsHeader>
            <p>Permissions</p>
          </StyledUserDetailsHeader>

          <StyledBasicInfoWrapper>
            <StyledPermissionCon>
              {Object.entries(groupedPermissions).map(([group, actions]) => (
                <StyledPermissionGroupWrapper key={group}>
                  <StyledPermissionGroup>{formatDisplayName(group)}</StyledPermissionGroup>

                  <StyledPermissionActions>
                    {actions.map((action) => {
                      const Badge = PermissionBadge[action] || (({ children }) => <StyledDarkBadge>{children}</StyledDarkBadge>);
                      return <Badge key={action}>{action}</Badge>;
                    })}
                  </StyledPermissionActions>
                </StyledPermissionGroupWrapper>
              ))}
            </StyledPermissionCon>
          </StyledBasicInfoWrapper>
        </StyledCardCon>
      </StyledSecondRowCon>
    </StyledMemberDetailsCardLayout>
  );
};

export default MemberProfile;

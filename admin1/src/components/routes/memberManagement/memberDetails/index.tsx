import { StyledCardCon, StyledMainCon } from "@/styles/styled/reusableStyled";
import React, { useEffect, useMemo, useState } from "react";
import {
  StyledBasicInfoInput,
  StyledBasicInfoLabel,
  StyledBasicInfoWrapper,
  StyledEditUserDetails,
  StyledLeftContentWrapper,
  StyledMemberDetailsBtn,
  StyledMemberDetailsFormWrapper,
  StyledMemberDetailsTab,
  StyledMemberDetailsText,
  StyledMemberDetailsWrapper,
  StyledTitleWrapper,
  StyledUserDetailsHeader,
} from "./styled";
import { useRouter } from "next/router";
import { EMemberDetailsTab, EMemberPage, ERoutes } from "@/enums/mainEnums";
import { IoChevronBack } from "react-icons/io5";
import { StyledBackButton, StyledCreateUserTitle } from "../createUser/styled";
import useGetAdminList from "@/hooks/pagesHooks/useGetAdminList";
import MemberProfile from "./tabs/memberProfile";
import MemberLogs from "./tabs/memberLogs";

const MemberDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getAdminByID, adminDetails } = useGetAdminList();
  const [memberTab, setMembertab] = useState<EMemberDetailsTab>(EMemberDetailsTab.profile);

  useEffect(() => {
    if (id) {
      getAdminByID({ id: Number(id) });
    }
  }, [id]);

  return (
    <StyledMainCon>
      <StyledTitleWrapper>
        <StyledLeftContentWrapper>
          <StyledBackButton onClick={() => router.back()}>
            <IoChevronBack />
            <span>Back</span>
          </StyledBackButton>
          <StyledCreateUserTitle>Details of {adminDetails.name}</StyledCreateUserTitle>
        </StyledLeftContentWrapper>

        <StyledMemberDetailsTab>
          <StyledMemberDetailsBtn className={memberTab === EMemberDetailsTab.profile ? "active" : ""} onClick={() => setMembertab(EMemberDetailsTab.profile)}>
            Profile
          </StyledMemberDetailsBtn>

          <StyledMemberDetailsBtn className={memberTab === EMemberDetailsTab.logs ? "active" : ""} onClick={() => setMembertab(EMemberDetailsTab.logs)}>
            Logs
          </StyledMemberDetailsBtn>
        </StyledMemberDetailsTab>
      </StyledTitleWrapper>

      <StyledMemberDetailsWrapper>
        {memberTab === EMemberDetailsTab.profile && <MemberProfile adminDetails={adminDetails} />}
        {memberTab === EMemberDetailsTab.logs && <MemberLogs />}
      </StyledMemberDetailsWrapper>
    </StyledMainCon>
  );
};

export default MemberDetails;

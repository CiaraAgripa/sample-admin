import { useCurrentUser } from "@/context/globalContext";
import useAuth from "@/hooks/pagesHooks/useAuth";
import React from "react";
import SignUps from "./sections/signUps";
import { DarkBtn, StyledMainCon, StyledTitle } from "@/styles/styled/reusableStyled";
import { StyledChartWrapper, StyledMiniGraphCon, StyledNonGraphWrapper } from "./styled";
import { useIsSideBarOpen } from "@/context/controllerContext";
import Orders from "./sections/orders";
import PastVisitors from "./sections/pastVisitors";
import TotalUsers from "./sections/totalUsers";
import Revenue from "./sections/revenue";
import Announcements from "./sections/announcement";
import NewUsers from "./sections/newUsers";
import UserActivityOverview from "./sections/userActivityOverview";

const Dashboard = () => {
  return (
    <StyledMainCon>
      <StyledTitle>Dashboard</StyledTitle>

      <StyledMiniGraphCon>
        <TotalUsers />
        <SignUps />
        {/* <PastVisitors /> */}
        <Orders />
      </StyledMiniGraphCon>

      <StyledChartWrapper>
        <Revenue />
        <UserActivityOverview />
      </StyledChartWrapper>

      <StyledNonGraphWrapper>
        <NewUsers />
        <Announcements />
      </StyledNonGraphWrapper>
    </StyledMainCon>
  );
};

export default Dashboard;

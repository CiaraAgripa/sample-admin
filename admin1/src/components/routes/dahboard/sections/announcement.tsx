import React from "react";
import { StyledNewUserBtn, StyledNewUserTableCon, StyledNonGraphCon, StyledRevenueHeader } from "../styled";
import { StatusAnnouncementBadge } from "@/dictionary/dictionary";
import { StyledTable, StyledTableHeader, StyledRedBadge, StyledTableRow, StyledTableCell } from "@/styles/styled/reusableStyled";
import { announcement } from "@/contants/mainConst";

const Announcements = () => {
  return (
    <StyledNonGraphCon>
      <StyledRevenueHeader>
        <p>Announcements</p>
        <StyledNewUserBtn>View All</StyledNewUserBtn>
      </StyledRevenueHeader>

      <StyledNewUserTableCon>
        <StyledTable>
          <thead>
            <tr>
              <StyledTableHeader>Date Posted</StyledTableHeader>
              <StyledTableHeader>Title</StyledTableHeader>
              <StyledTableHeader>Status</StyledTableHeader>
            </tr>
          </thead>
          <tbody>
            {announcement.map((item, index) => {
              const Badge = StatusAnnouncementBadge[item.status] || StyledRedBadge;

              return (
                <StyledTableRow key={index}>
                  <StyledTableCell>{item.datePosted}</StyledTableCell>
                  <StyledTableCell>{item.title}</StyledTableCell>
                  <StyledTableCell>
                    <Badge>{item.status}</Badge>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </tbody>
        </StyledTable>
      </StyledNewUserTableCon>
    </StyledNonGraphCon>
  );
};

export default Announcements;

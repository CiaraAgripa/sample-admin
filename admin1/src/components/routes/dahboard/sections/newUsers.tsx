import React from "react";
import { StyledNewUserBtn, StyledNewUserTableCon, StyledNonGraphCon, StyledRevenueHeader } from "../styled";
import { newUsers } from "@/contants/mainConst";
import { StyledTable, StyledTableHeader, StyledTableRow, StyledTableCell, StyledRedBadge } from "@/styles/styled/reusableStyled";
import { StatusBadge } from "@/dictionary/dictionary";

const NewUsers = () => {
  return (
    <StyledNonGraphCon>
      <StyledRevenueHeader>
        <p>New Users</p>

        <StyledNewUserBtn>View All</StyledNewUserBtn>
      </StyledRevenueHeader>

      <StyledNewUserTableCon>
        <StyledTable>
          <thead>
            <tr>
              <StyledTableHeader>Date Joined</StyledTableHeader>
              <StyledTableHeader>User</StyledTableHeader>
              <StyledTableHeader>Status</StyledTableHeader>
            </tr>
          </thead>
          <tbody>
            {newUsers.map((user, index) => {
              const Badge = StatusBadge[user.status] || StyledRedBadge;

              return (
                <StyledTableRow key={index}>
                  <StyledTableCell>{user.dateJoined}</StyledTableCell>
                  <StyledTableCell>{user.user}</StyledTableCell>
                  <StyledTableCell>
                    <Badge>{user.status}</Badge>
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

export default NewUsers;

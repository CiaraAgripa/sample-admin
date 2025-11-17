import { StatusBadge } from "@/dictionary/dictionary";
import { ERoutes, EMemberPage } from "@/enums/mainEnums";
import { StyledCardCon, StyledTable, StyledTableHeader2, StyledGreenBadge, StyledTableRow, StyledTableCell } from "@/styles/styled/reusableStyled";
import { convertDate, formatDisplayName } from "@/utilities/mainUtils";
import router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import adminList from "../../adminList";
import { StyledActionsWrapper, StyledEditUserBtn, StyledDeleteUserBtn } from "../../adminList/styled";
import useLogs from "@/hooks/pagesHooks/useLogs";
import Pagination from "@/components/ui/pagination";
import { useModal } from "@/context/modalContext";
import LogDetails from "../modal/logDetails";

const MemberLogs = () => {
  const { getLogList, logList, logPagination, setLogPagination } = useLogs();
  const { openModal } = useModal();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getLogList({
      params: {
        page: logPagination.page,
        adminId: Number(id),
        limit: 50,
      },
    });
  }, [ logPagination.page]);

  return (
    <StyledCardCon>
       
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader2>Log ID </StyledTableHeader2>
            <StyledTableHeader2>Name</StyledTableHeader2>
            <StyledTableHeader2>Email</StyledTableHeader2>
            <StyledTableHeader2>Action</StyledTableHeader2>
            <StyledTableHeader2>IP Address</StyledTableHeader2>
            <StyledTableHeader2>Date Joined</StyledTableHeader2>
            <StyledTableHeader2>Resource ID</StyledTableHeader2>
          </tr>
        </thead>
        <tbody>
          {logList.length > 0 ? (
            logList.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell>{user.id}</StyledTableCell>
                <StyledTableCell>{user.adminName}</StyledTableCell> 
                <StyledTableCell>{user.adminEmail}</StyledTableCell>
                <StyledTableCell>{formatDisplayName(user.action)}</StyledTableCell>
                <StyledTableCell>{user.ipAddress}</StyledTableCell>
                <StyledTableCell>{convertDate(user.createdAt)}</StyledTableCell>
                <StyledTableCell>{user.resourceId || "None"}</StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={7} style={{ textAlign: "center" }}>
                No logs available
              </StyledTableCell>
            </StyledTableRow>
          )}
        </tbody>
      </StyledTable>

      <Pagination
        pagination={logPagination}
        onPageChange={(page: number) => {
          setLogPagination((prev) => ({
            ...prev,
            page,
          }));
        }}
      />
    </StyledCardCon>
  );
};

export default MemberLogs;

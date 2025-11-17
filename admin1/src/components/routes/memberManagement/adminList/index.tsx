import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  StyledActionsWrapper,
  StyledCreateUserBtn,
  StyledDeleteUserBtn,
  StyledEditUserBtn,
  StyledLeftHeaderWrapper,
  StyledMemberDropdown,
  StyledSearchCon,
  StyledSearchInput,
  StyledSortOrderBtn,
  StyledUserListCon,
  StyledUserListHeader,
} from "./styled";
import { StyledGreenBadge, StyledMainCon, StyledTable, StyledTableCell, StyledTableHeader2, StyledTableRow, StyledTitle } from "@/styles/styled/reusableStyled";
import { CgSearch } from "react-icons/cg";
import Pagination from "@/components/ui/pagination";
import { StatusBadge } from "@/dictionary/dictionary";
import { LuPlus } from "react-icons/lu";
import { useRouter } from "next/router";
import { EEmptyString, EMemberPage, ERoutes, ESortOrder } from "@/enums/mainEnums";
import useGetAdminList from "@/hooks/pagesHooks/useGetAdminList";
import { convertDate } from "@/utilities/mainUtils";
import Dropdown from "@/components/ui/dropdown";
import { sortOptions } from "@/contants/mainConst";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";
import { HiSearch } from "react-icons/hi";

const AdminList = () => {
  const router = useRouter();
  const { getAdminList, adminList, adminPagination, setAdminPagination } = useGetAdminList();
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState<ESortOrder>(ESortOrder.asc);
  const [searchTerm, setSearchTerm] = useState("");

  const handleGetAdminList = useCallback(() => {
    getAdminList({
      params: {
        page: adminPagination.page,
        sortBy,
        sortOrder,
        search: searchTerm,
      },
    });
  }, [adminPagination.page, sortBy, sortOrder, searchTerm]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleGetAdminList();
    }
  };

  useEffect(() => {
    if (searchTerm === EEmptyString.EmptyString) {
      handleGetAdminList();
    }
  }, [handleGetAdminList, searchTerm]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  return (
    <StyledMainCon>
      <StyledTitle>Admin List</StyledTitle>
      <StyledUserListCon>
        <StyledUserListHeader>
          <StyledLeftHeaderWrapper>
            <StyledMemberDropdown>
              <p>Sort by</p>
              <div style={{ minWidth: "9rem" }}>
                <Dropdown
                  options={sortOptions.map((option) => option.label)}
                  defaultOption={sortOptions[0].label}
                  onSelect={(selectedLabel) => {
                    const selectedOption = sortOptions.find((opt) => opt.label === selectedLabel);
                    handleSortChange(selectedOption?.value || "");
                  }}
                />
              </div>
            </StyledMemberDropdown>

            <StyledSortOrderBtn
              onClick={() => {
                setSortOrder((prev) => (prev === ESortOrder.asc ? ESortOrder.desc : ESortOrder.asc));
              }}
            >
              {sortOrder === ESortOrder.asc ? (
                <>
                  <TbSortAscending />
                  Asc
                </>
              ) : (
                <>
                  <TbSortDescending />
                  Desc
                </>
              )}
            </StyledSortOrderBtn>

            <StyledSearchCon>
              <HiSearch onClick={() => handleGetAdminList()} title="Search" aria-label="Search" />
              <StyledSearchInput onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search..." onKeyDown={handleKeyDown} />
            </StyledSearchCon>
          </StyledLeftHeaderWrapper>

          <StyledCreateUserBtn onClick={() => router.push(`${ERoutes.member}${EMemberPage.createAccount}`)}>
            <LuPlus />
            Create User
          </StyledCreateUserBtn>
        </StyledUserListHeader>

        <StyledTable>
          <thead>
            <tr>
              <StyledTableHeader2>Employee ID</StyledTableHeader2>
              <StyledTableHeader2>Name</StyledTableHeader2>
              <StyledTableHeader2>Email</StyledTableHeader2>
              <StyledTableHeader2>Role</StyledTableHeader2>
              <StyledTableHeader2>Status</StyledTableHeader2>
              <StyledTableHeader2>Date Joined</StyledTableHeader2>
              <StyledTableHeader2>Updated At</StyledTableHeader2>
              <StyledTableHeader2>Actions</StyledTableHeader2>
            </tr>
          </thead>
          <tbody>
            {adminList.map((user) => {
              const Badge = StatusBadge[user.status] || StyledGreenBadge;
              return (
                <StyledTableRow key={user.id}>
                  <StyledTableCell>{user.employeeId}</StyledTableCell>
                  <StyledTableCell>{user.name}</StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                  <StyledTableCell>{user.role}</StyledTableCell>
                  <StyledTableCell>
                    <Badge>{user.status}</Badge>
                  </StyledTableCell>
                  <StyledTableCell>{convertDate(user.createdAt)}</StyledTableCell>
                  <StyledTableCell>{convertDate(user.updatedAt)}</StyledTableCell>
                  <StyledTableCell>
                    <StyledActionsWrapper>
                      <StyledEditUserBtn
                        onClick={() =>
                          router.push({
                            pathname: `${ERoutes.member}${EMemberPage.memberDetails}`,
                            query: { id: user.id },
                          })
                        }
                      >
                        Details
                      </StyledEditUserBtn>
                      <StyledDeleteUserBtn>Delete</StyledDeleteUserBtn>
                    </StyledActionsWrapper>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </tbody>
        </StyledTable>

        <Pagination
          pagination={adminPagination}
          onPageChange={(page: number) => {
            setAdminPagination((prev) => ({
              ...prev,
              page,
            }));
          }}
        />
      </StyledUserListCon>
    </StyledMainCon>
  );
};

export default AdminList;

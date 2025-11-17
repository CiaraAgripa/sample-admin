import { initialAdminDetails, initialPagination } from "@/initialStateData/initialStateData";
import { localService } from "@/services/localServices";
import { TAdmins, TGetAdminDetails, TGetMemberListParams, TPagination } from "@/types/mainSchema";
import { asyncHandler } from "@/utilities/asyncHandler";
import { useState } from "react";

const useGetAdminList = () => {
  const [adminList, setAdminList] = useState<TAdmins[]>([]);
  const [adminPagination, setAdminPagination] = useState<TPagination>(initialPagination);
  const [adminDetails, setAdminDetails] = useState<TGetAdminDetails>(initialAdminDetails);

  const getAdminList = async ({ params = {} as TGetMemberListParams } = {}) => {
    const response = await asyncHandler(() => localService.getAdminListLocal({ params }));
    if (response) {
      setAdminList(response.admins);
      setAdminPagination(response.pagination);
    }
  };

  const getAdminByID = async ({ id }: { id: number }) => {
    const response = await asyncHandler(() => localService.getAdminByIDLocal({ id }));
    if (response) {
      setAdminDetails(response.admin);
    }
  };

  return { getAdminList, adminList, setAdminList, adminPagination, setAdminPagination, getAdminByID, adminDetails, setAdminDetails };
};

export default useGetAdminList;

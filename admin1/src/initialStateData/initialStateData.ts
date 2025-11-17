import { EEmptyString } from "@/enums/mainEnums";
import { TGetAdminDetails, TLoginParams, TPagination, TPostStatusOverview } from "@/types/mainSchema";

export const initialLoginForm: TLoginParams = {
  email: EEmptyString.EmptyString,
  password: EEmptyString.EmptyString,
};

export const initialPagination: TPagination = {
  page: 1,
  limit: 20,
  total: 0,
  totalPages: 0,
  hasNext: false,
  hasPrev: false,
};

export const initialAdminDetails: TGetAdminDetails = {
  id: 0,
  email: "",
  name: "",
  role: "",
  status: "",
  permissions: [],
  department: "",
  employeeId: "",
  lastLoginAt: null,
  approvedBy: 0,
  approvedAt: null,
  notes: "",
  isActive: false,
  createdAt: "",
  updatedAt: "",
};

export const initialPostStatusOverview: TPostStatusOverview = {
  total: 0,
  published: 0,
  unpublished: 0,
  pinned: 0,
};

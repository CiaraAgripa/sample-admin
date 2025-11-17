export type TIDNumberParams = {
  id: number;
};

// Auth

export type TLoginParams = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  message: string;
  token: string;
  admin: TLoginAdmin;
  expiresAt: string;
};

export type TLoginAdmin = {
  id: number;
  email: string;
  name: string;
  role: string;
  permissions: string[];
  department: string;
};

export type TAuthMeResponse = {
  admin: {
    id: number;
    email: string;
    name: string;
    role: string;
    status: string;
    permissions: string[];
    department: string;
    employeeId: string;
    lastLoginAt: string;
    createdAt: string;
  };
};

export type TLoginToken = {
  name: string;
  token: string;
  accessToken?: TAuthMeResponse;
  expiresAt: string;
};

export type TSessionToken = {
  authenticated: boolean;
  token: string;
  user: TCurrentUser;
  expiresAt: string;
};

export type TCurrentUser = {
  id?: number;
  email?: string;
  name?: string;
  role?: string;
  status?: string;
  permissions?: string[];
  department?: string;
  employeeId?: string;
};

export type TLoginResponseStatus = {
  error: null | string;
  status: number;
  ok: boolean;
  url: string;
};

export type IRequestConfig = {
  Authorization: string;
  [key: string]: string;
};
// Menu

// Admin List

export type TGeAdminListResponse = {
  admins: TAdmins[];
  pagination: TPagination;
  filters: {
    search: string;
    role: string;
    status: string;
  };
  sortBy: string;
  sortOrder: string;
};

export type TAdmins = {
  id: number;
  email: string;
  name: string;
  role: string;
  status: string;
  department: string;
  employeeId: string;
  lastLoginAt: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export type TGetMemberListParams = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
  search?: string;
};

export type TGetAdminByIDResponse = {
  admin: TGetAdminDetails;
};

export type TGetAdminDetails = {
  id: number;
  email: string;
  name: string;
  role: string;
  status: string;
  permissions: string[];
  department: string;
  employeeId: string;
  lastLoginAt: string | null;
  approvedBy: number;
  approvedAt: string | null;
  notes: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

// Logs

export type TGetLogsParams = {
  page?: number;
  limit?: number;
  action?: string;
  adminId?: number;
  startDate?: string;
  endDate?: string;
};

export type TGetLogResponse = {
  logs: TLogs[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  filters: {
    adminId: string;
  };
  sortOrder: string;
};

export type TLogs = {
  id: number;
  adminId: number;
  adminName: string;
  adminEmail: string;
  action: string;
  resource: string;
  resourceId: null;
  details: TLogDetails;
  ipAddress: string;
  userAgent: string;
  success: boolean;
  errorMessage: string | null;
  createdAt: string;
};

export type TLogDetails = {
  page: number;
  limit: number;
  total: number;
  filters: {
    action: string;
    adminId: string;
    endDate: string;
    startDate: string;
  };
};

// Post Status Overview

export type TGetPostStatusOverviewRes = {
  success: boolean;
  data: {
    overview: TPostStatusOverview;
    categoryStats: TPostStatusOverviewCategories[];
    recentActivity: TPostStatusOverviewRecentAct[];
  };
};

export type TPostStatusOverview = {
  total: number;
  published: number;
  unpublished: number;
  pinned: number;
};

export type TPostStatusOverviewCategories = {
  category: string;
  count: number;
};

export type TPostStatusOverviewRecentAct = {
  date: string;
  count: number;
};

// post

export type TGetPostParams = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
  search?: string;
  category?: string;
  isPublished?: string;
  isPinned?: string;
  author?: string;
  symbol?: string;
};

export type TGetPostResponse = {
  success: boolean;
  data: {
    posts: TGetPosts[];
    pagination: TContentPagination;
  };
};

export type TGetPosts = {
  id: number;
  uniqueHash: string;
  sourceUrl: string;
  symbols: string[];
  institution: string;
  sector: string;
  title: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  isPinned: boolean;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
};

export type TContentPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type TPostContentParams = {
  title: string;
  content: string;
  author: string;
  symbols?: string[];
  institution: string;
  sector: string;
  category: string;
  tags?: string[];
  isPublished: string | boolean;
  isPinned: string | boolean;
  sourceUrl: string;
};

export type TPostContentResponse = {
  success: boolean;
  data: {
    id: number;
    uniqueHash: string;
    sourceUrl: string;
    symbols: string[];
    institution: string;
    sector: string;
    title: string;
    content: string;
    author: string;
    category: string;
    tags: string[];
    isPublished: string | boolean;
    isPinned: string | boolean;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    createdAt: string;
    updatedAt: string;
  };
  message: string;
};

export enum ERoutes {
  root = "/",
  adminError = "/admin/error",
  login = "/login",
  userList = "/user-list",
  userDetails = "/user-details",
  myAccount = "/my-account",
  member = "/member",
  contentManagement = "/content-management"
}

export enum EMemberPage {
  userList = "/user-list",
  adminList = "/admin-list",
  createAccount = "/create-account",
  memberDetails = "/member-details",
}

export enum ESortOrder {
  asc = "asc",
  desc = "desc",
}

export enum EEmptyString {
  EmptyString = "",
}

export enum ELocalServiceAPIRoutes {
  getAdminList = "/api/get/admin-list",
  getAdminByID = "/api/get/admin-details",
  getLogList = "/api/get/logs",
  getPostStatsOverview = "/api/get/post-stats-overview",
  getPosts = "/api/get/posts",
  postContent = "api/post/post-content"
}

export enum EAuthServiceAPIRoutes {
  apiLogin = "/api/auth/login",
  apiMe = "/api/auth/me",
}

export enum EAPIServiceAPIRoutes {
  getAdminList = "/api/admins",
  getLogs = "/api/logs",
  getPostStatsOverview = "/api/posts/stats/overview",
  getPosts = "/api/posts"
}

export enum EMemberDetailsTab {
  profile = "profile",
  logs = "logs",
}

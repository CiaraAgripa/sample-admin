export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Moderator" | "User";
  status: "Active" | "Suspended" | "Pending";
  createdAt: string;
  lastLogin: string;
  permissions: string[];
  activityLog: { date: string; action: string }[];
}

export interface Role {
  name: string;
  permissions: string[];
}

export const newUsers = [
  {
    dateJoined: "2025-09-25",
    user: "John Doe",
    status: "verified",
  },
  {
    dateJoined: "2025-09-26",
    user: "Jane Smith",
    status: "pending",
  },
  {
    dateJoined: "2025-09-27",
    user: "Michael Lee",
    status: "blocked",
  },
  {
    dateJoined: "2025-09-28",
    user: "Emily Johnson",
    status: "pending",
  },
  {
    dateJoined: "2025-09-29",
    user: "David Kim",
    status: "verified",
  },
  {
    dateJoined: "2025-09-30",
    user: "Jack Roldan",
    status: "verified",
  },
];

export const announcement = [
  {
    id: 1,
    title: "System Maintenance",
    message: "The system will undergo scheduled maintenance on Oct 10, 2025 from 1AM to 3AM.",
    datePosted: "2025-10-01",
    status: "active",
  },
  {
    id: 2,
    title: "New Feature Release",
    message: "We’re excited to announce a new dashboard feature rolling out this week!",
    datePosted: "2025-09-25",
    status: "active",
  },
  {
    id: 3,
    title: "Holiday Notice",
    message: "Our offices will be closed on Oct 15 for a national holiday.",
    datePosted: "2025-09-20",
    status: "expired",
  },
  {
    id: 4,
    title: "Beta Testing",
    message: "Join our beta testing program and try out upcoming features early.",
    datePosted: "2025-09-18",
    status: "draft",
  },
];

export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Moderator" | "User";
  status: "Active" | "Suspended" | "Pending";
  createdAt: string;
  lastLogin: string;
  permissions: string[];
  activityLog: { date: string; action: string }[];
}

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-12",
    lastLogin: "2025-10-05 14:33",
    permissions: ["manage_users", "view_reports", "edit_content"],
    activityLog: [
      { date: "2025-10-05 14:30", action: "Edited system settings" },
      { date: "2025-10-04 11:20", action: "Deleted user #24" },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Moderator",
    status: "Active",
    createdAt: "2024-03-22",
    lastLogin: "2025-10-06 09:11",
    permissions: ["view_reports", "manage_posts"],
    activityLog: [
      { date: "2025-10-06 09:00", action: "Reviewed flagged comment" },
      { date: "2025-10-02 18:15", action: "Updated post #345" },
    ],
  },
  {
    id: 3,
    name: "Michael Lee",
    email: "michael.lee@example.com",
    role: "User",
    status: "Pending",
    createdAt: "2025-09-18",
    lastLogin: "-",
    permissions: ["view_content"],
    activityLog: [],
  },
  {
    id: 4,
    name: "Sophia Kim",
    email: "sophia.kim@example.com",
    role: "User",
    status: "Active",
    createdAt: "2024-11-09",
    lastLogin: "2025-10-04 16:42",
    permissions: ["view_content", "comment"],
    activityLog: [
      { date: "2025-10-04 16:40", action: "Posted comment on article #23" },
      { date: "2025-10-01 12:10", action: "Updated profile picture" },
    ],
  },
  {
    id: 5,
    name: "David Chen",
    email: "david.chen@example.com",
    role: "Moderator",
    status: "Suspended",
    createdAt: "2023-12-14",
    lastLogin: "2025-09-28 22:05",
    permissions: ["manage_posts"],
    activityLog: [{ date: "2025-09-20 10:30", action: "Deleted post #582" }],
  },
  {
    id: 6,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    role: "User",
    status: "Active",
    createdAt: "2024-06-02",
    lastLogin: "2025-10-05 19:47",
    permissions: ["view_content"],
    activityLog: [{ date: "2025-10-05 19:45", action: "Viewed article #99" }],
  },
  {
    id: 7,
    name: "Alex Garcia",
    email: "alex.garcia@example.com",
    role: "User",
    status: "Active",
    createdAt: "2025-02-20",
    lastLogin: "2025-10-05 21:11",
    permissions: ["view_content", "comment"],
    activityLog: [
      { date: "2025-10-05 21:10", action: "Commented on post #41" },
      { date: "2025-10-02 10:25", action: "Liked post #37" },
    ],
  },
];

export const roles: Role[] = [
  {
    name: "Admin",
    permissions: ["manage_users", "view_reports", "edit_settings", "delete_records"],
  },
  {
    name: "Manager",
    permissions: ["view_reports", "manage_team", "edit_content"],
  },
  {
    name: "Editor",
    permissions: ["create_content", "edit_content", "publish_content"],
  },
  {
    name: "Support",
    permissions: ["view_tickets", "respond_tickets"],
  },
  {
    name: "User",
    permissions: ["view_profile", "update_profile"],
  },
  {
    name: "Guest",
    permissions: ["view_public_pages"],
  },
];

export const sortOptions = [
  { label: "Name", value: "name" },
  { label: "Email", value: "email" },
  { label: "Role", value: "role" },
  { label: "Status", value: "status" },
  { label: "Department", value: "department" },
  { label: "Employee ID", value: "employeeId" },
  { label: "Date Joined", value: "createdAt" },
  { label: "Last Updated", value: "updatedAt" },
];
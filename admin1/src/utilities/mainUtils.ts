export const getBaseURL = (): string => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return process.env.NEXTAUTH_URL || "http://localhost:3000";
};

export const pad2 = (n: any) => (n < 10 ? "0" : "") + n;

export const convertDate = (paramDate: any) => {
  if (!paramDate) return "-";

  const date = new Date(paramDate);

  return date.getFullYear() + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate());
};

export const formatDateTime = (isoString?: string): string => {
  if (!isoString) return "No recent records";

  const date = new Date(isoString);
  if (isNaN(date.getTime())) return "Invalid date";

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}


export const groupPermissions = (permissions?: string[]) => {
  if (!permissions) return {};

  return permissions.reduce((acc: Record<string, string[]>, perm: string) => {
    const [group, action] = perm.split(":");
    if (!acc[group]) acc[group] = [];
    acc[group].push(action);
    return acc;
  }, {});
};

export const formatDisplayName = (value?: string): string => {
  if (!value) return "";

  return value
    .toString()
    .replace(/_/g, " ") 
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const  getRoleClass = (role?: string) => {
  return role ? role.toLowerCase().replace(/_/g, "-") : "";
}

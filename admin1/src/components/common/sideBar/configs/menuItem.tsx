import { EMemberPage, ERoutes } from "@/enums/mainEnums";
import { ReactNode } from "react";
import { FaRegChartBar } from "react-icons/fa";
import { PiBankBold, PiGearBold, PiLayoutBold, PiMegaphoneBold, PiShieldCheckBold, PiUserListBold } from "react-icons/pi";

export type MenuItem = {
  label: string;
  icon?: ReactNode;
  key: string;
  route?: string;
  isAccordion?: boolean;
  baseRoute?: string;
  subItems?: {
    label: string;
    key: string;
    page: string;
  }[];
};

export const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <FaRegChartBar />,
    key: "general",
    route: ERoutes.root,
  },
  {
    label: "Member Lists",
    icon: <PiUserListBold />,
    isAccordion: true,
    key: "memberManagement",
    baseRoute: ERoutes.member,
    subItems: [
      {
        label: "Admin List",
        key: "adminList",
        page: EMemberPage.adminList,
      },
    ],
  },
  {
    label: "Permissions",
    icon: <PiShieldCheckBold />,
    isAccordion: true,
    key: "partnerManagement",
    baseRoute: "",
    subItems: [
      {
        label: "Partner List",
        key: "partnerList",
        page: "",
      },
    ],
  },
  {
    label: "Content Management",
    icon: <PiLayoutBold />,
    key: "contentManagement",
    route: ERoutes.contentManagement,
  },
  // {
  //   label: "Contents",
  //   icon: <PiLayoutBold />,
  //   isAccordion: true,
  //   key: "depositAndWithdrawal",
  //   baseRoute: "",
  //   subItems: [
  //     {
  //       label: "Agent Deposit Request",
  //       key: "agentDeposit",
  //       page: "",
  //     },
  //   ],
  // },
  {
    label: "Transactions",
    icon: <PiBankBold />,
    isAccordion: true,
    key: "bettingSummary",
    baseRoute: "",
    subItems: [
      {
        label: "Live Betting Summary",
        key: "bettingSummary",
        page: "",
      },
    ],
  },
  {
    label: "System",
    icon: <PiGearBold />,
    isAccordion: true,
    key: "systemManagement",
    baseRoute: "",
    subItems: [
      {
        label: "system",
        key: "system",
        page: "",
      },
    ],
  },
  {
    label: "Notification",
    icon: <PiMegaphoneBold />,
    key: "contact",
    route: "",
  },
];

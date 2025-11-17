import React, { useEffect, useRef, useState } from "react";
import { StyledArrowRight, StyledMenuItemCon, StyledSidebarCon, StyledSidebarItem, StyledSidebarSubItem, StyledSubItemsWrapper, StyledTooltip, StyledTooltipLabel } from "./styled";
import { useIsSideBarOpen } from "@/context/controllerContext";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { menuItems } from "./configs/menuItem";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTheme } from "styled-components";

const SideBar = () => {
  const isSideBarOpen = useIsSideBarOpen();
  const theme = useTheme();
  const { t } = useTranslation("common");
  const router = useRouter();
  const { pathname, query } = router;

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleAccordion = (menu: string) => {
    if (!isSideBarOpen) {
      setOpenAccordion((prev) => (prev === menu ? null : menu));
    }
  };

  const handleNavigation = (baseRoute: string, page: string) => {
    router.push(`${baseRoute}${page}`);
  };

  const handleMouseEnter = (key: string) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    setHoveredItem(key);
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHoveredItem(null);
      setIsTooltipVisible(false);
    }, 800);
  };

  useEffect(() => {
    const matchedAccordion = menuItems.find(({ isAccordion, subItems, baseRoute, key }) => isAccordion && subItems?.some(({ page }) => pathname === `${baseRoute}${page}`));
    if (matchedAccordion) {
      setOpenAccordion(matchedAccordion.key);
    } else {
      setOpenAccordion(null);
    }
  }, [pathname]);

  return (
    <StyledSidebarCon $isSideBarOpen={isSideBarOpen}>
      {menuItems.map(({ label, icon, route, isAccordion, key, subItems, baseRoute }) => {
        const isActive = pathname === route || subItems?.some((subItem) => pathname === `${baseRoute}${subItem.page}`);
        const isAccordionOpen = openAccordion === key;

        return (
          <StyledMenuItemCon $isSideBarOpen={isSideBarOpen} key={key}>
              <StyledSidebarItem
                $isSideBarOpen={isSideBarOpen}
                onClick={isAccordion ? () => toggleAccordion(key) : () => route && router.push(route)}
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: isActive || (isAccordionOpen && !isSideBarOpen) ? theme.text3 : "",
                  backgroundColor: isActive ? theme.fill1 : "",
                }}
              >
                <span style={{ color: isActive ? "var(--skyblue-color)" : "" }}>{icon}</span>
                {!isSideBarOpen && t(label)}

                {!isSideBarOpen && isAccordion ? (
                  <StyledArrowRight $isAccordionOpen={isAccordionOpen}>
                    <MdOutlineKeyboardArrowRight />
                  </StyledArrowRight>
                ) : (
                  ""
                )}

                {isSideBarOpen && (
                  <StyledTooltip
                    $isVisible={isTooltipVisible && hoveredItem === key}
                    onMouseEnter={() => {
                      if (hideTimeout.current) {
                        clearTimeout(hideTimeout.current);
                      }
                      setIsTooltipVisible(true);
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    {isAccordion
                      ? subItems?.map(({ label, page }) => (
                          <StyledTooltipLabel
                            key={label}
                            onClick={() => handleNavigation(baseRoute!, page)}
                            style={{
                              cursor: "pointer",
                              color: pathname === `${baseRoute}${page}` ? "var(--skyblue-color)" : "",
                            }}
                          >
                            {t(label)}
                          </StyledTooltipLabel>
                        ))
                      : t(label)}
                  </StyledTooltip>
                )}
              </StyledSidebarItem>

              <StyledSubItemsWrapper $isAccordionOpen={isAccordionOpen}>
                {!isSideBarOpen &&
                  isAccordion &&
                  isAccordionOpen &&
                  subItems?.map(({ label, key, page }) => {
                    const isSubItemActive = pathname === `${baseRoute}${page}`;
                    return (
                      <StyledSidebarSubItem
                        key={key}
                        $isSideBarOpen={isSideBarOpen}
                        $isActive={isSubItemActive}
                        onClick={() => baseRoute && handleNavigation(baseRoute, page)}
                      >
                        {!isSideBarOpen && t(label)}
                      </StyledSidebarSubItem>
                    );
                  })}
              </StyledSubItemsWrapper>
          </StyledMenuItemCon>
        );
      })}
    </StyledSidebarCon>
  );
};

export default SideBar;

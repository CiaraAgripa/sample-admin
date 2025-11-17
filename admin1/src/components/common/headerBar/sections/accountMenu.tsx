import React, { useEffect, useRef, useState } from "react";
import { StyledAccountDropdown, StyledAccountItem, StyledAccountMenu, StyledAccountMenuBtn, StyledLogOutBtn } from "../styled";
import { PiUserCircle, PiUserCircleGear } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import { LuKeyRound } from "react-icons/lu";
import useAuth from "@/hooks/pagesHooks/useAuth";
import { useRouter } from "next/router";
import { ERoutes } from "@/enums/mainEnums";

const AccountMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { handleLogout } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <StyledAccountDropdown ref={menuRef}>
      <StyledAccountMenuBtn onClick={() => setIsMenuOpen((prev) => !prev)}>
        <PiUserCircle />
      </StyledAccountMenuBtn>

      <StyledAccountMenu $isMenuOpen={isMenuOpen}>
        <StyledAccountItem onClick={() => router.push(ERoutes.myAccount)}>
          <PiUserCircleGear />
          <span>My account</span>
        </StyledAccountItem>
        <StyledAccountItem>
          <LuKeyRound />
          <span>Change Password</span>
        </StyledAccountItem>
        <StyledLogOutBtn onClick={handleLogout}>
          <TbLogout />
          <span>Log Out</span>
        </StyledLogOutBtn>
      </StyledAccountMenu>
    </StyledAccountDropdown>
  );
};

export default AccountMenu;

import { StyledCardCon, StyledMainCon } from "@/styles/styled/reusableStyled";
import React, { useState } from "react";
import {
  StyledBackButton,
  StyledCreateUserFooter,
  StyledCreateUserFormWrapper,
  StyledCreateUserHeader,
  StyledCreateUserHeader2,
  StyledCreateUserInfoCon,
  StyledCreateUserInput,
  StyledCreateUserLabel,
  StyledCreateUserTitle,
  StyledSubmitNewUser,
  StyledTitleWrapper,
} from "./styled";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/router";
import { EMemberPage, ERoutes } from "@/enums/mainEnums";
import { PiLockBold, PiUserBold, PiUserGearBold } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import Dropdown from "@/components/ui/dropdown";
import { Role, roles } from "@/contants/mainConst";

const CreateUser = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<Role>(roles[0]);

  const handleRoleSelect = (roleName: string)  => {
    const foundRole = roles.find((r) => r.name === roleName);
    if (foundRole) setSelectedRole(foundRole);
  };

  return (
    <StyledMainCon>
      <StyledTitleWrapper>
        <StyledBackButton onClick={() => router.push(`${ERoutes.member}${EMemberPage.adminList}`)}>
          <IoChevronBack />
          <span>Back</span>
        </StyledBackButton>
        <StyledCreateUserTitle>Create User</StyledCreateUserTitle>
      </StyledTitleWrapper>

      <StyledCardCon>
        <StyledCreateUserHeader>
          <h2>User Infomation</h2>
          <p>Fill in the details to create a new user account</p>
        </StyledCreateUserHeader>

        <StyledCreateUserInfoCon>
          <StyledCreateUserHeader2>
            <PiUserBold />
            <p>Personal Information</p>
          </StyledCreateUserHeader2>

          <StyledCreateUserFormWrapper>
            <StyledCreateUserLabel>
              First Name
              <StyledCreateUserInput type="email" placeholder="Enter First Name" />
            </StyledCreateUserLabel>

            <StyledCreateUserLabel>
              Last Name
              <StyledCreateUserInput type="email" placeholder="Enter Last Name" />
            </StyledCreateUserLabel>
          </StyledCreateUserFormWrapper>
        </StyledCreateUserInfoCon>

        <StyledCreateUserInfoCon>
          <StyledCreateUserHeader2>
            <FaRegEnvelope />
            <p>Contact Information</p>
          </StyledCreateUserHeader2>

          <StyledCreateUserFormWrapper>
            <StyledCreateUserLabel>
              Email Address
              <StyledCreateUserInput type="email" placeholder="user@example.com" />
            </StyledCreateUserLabel>

            <StyledCreateUserLabel>
              Phone Number
              <StyledCreateUserInput type="email" placeholder="Phone number" />
            </StyledCreateUserLabel>
          </StyledCreateUserFormWrapper>
        </StyledCreateUserInfoCon>

        <StyledCreateUserInfoCon>
          <StyledCreateUserHeader2>
            <PiUserGearBold />
            <p>Account Settings</p>
          </StyledCreateUserHeader2>

          <StyledCreateUserFormWrapper>
            <StyledCreateUserLabel>
              Role
              <Dropdown options={roles.map((r) => r.name)} defaultOption={selectedRole.name} onSelect={handleRoleSelect} />
            </StyledCreateUserLabel>

            <StyledCreateUserLabel>
              Permissions
              <Dropdown options={selectedRole.permissions} defaultOption={selectedRole.permissions[0]} onSelect={(perm) => console.log(`Selected permission: ${perm}`)} />
            </StyledCreateUserLabel>
          </StyledCreateUserFormWrapper>
        </StyledCreateUserInfoCon>

        <StyledCreateUserInfoCon>
          <StyledCreateUserHeader2>
            <PiLockBold />
            <p>Account Settings</p>
          </StyledCreateUserHeader2>

          <StyledCreateUserFormWrapper>
            <StyledCreateUserLabel>
              Password
              <StyledCreateUserInput type="email" placeholder="Password" />
            </StyledCreateUserLabel>

            <StyledCreateUserLabel>
              Verify Password
              <StyledCreateUserInput type="email" placeholder="Verfiy password" />
            </StyledCreateUserLabel>
          </StyledCreateUserFormWrapper>
        </StyledCreateUserInfoCon>

        <StyledCreateUserFooter>
          <StyledSubmitNewUser>Submit New User Information</StyledSubmitNewUser>
        </StyledCreateUserFooter>
      </StyledCardCon>
    </StyledMainCon>
  );
};

export default CreateUser;

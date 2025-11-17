import React, { useState } from "react";
import {
  StyledLoginCon,
  StyledLoginCard,
  StyledLoginInput,
  StyledLoginBtn,
  StyledLoginLabel,
  TogglePasswordButton,
  StyledInputWrapper,
  StyledLoginTitle,
  StyledSubTitle,
  StyledFormWrapper,
  StyledSignUpBtn,
  StyledThemeTogglerBtn,
} from "./styled";
import { useTheme } from "@/context/themeContext";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import useAuth from "@/hooks/pagesHooks/useAuth";

const Login = () => {
  const { isDark, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const { form, setForm, handleLogin } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <StyledLoginCon>
      <StyledThemeTogglerBtn type="button" onClick={toggleTheme}>
        {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
      </StyledThemeTogglerBtn>
      <StyledLoginCard>
        <StyledLoginTitle>Sign In</StyledLoginTitle>
        <StyledSubTitle>Enter your credentials to access your account</StyledSubTitle>
        <form>
          <StyledFormWrapper>
            <StyledLoginLabel>
              Email
              <StyledLoginInput
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={({ target: { value } }) =>
                  setForm((prev) => ({
                    ...prev,
                    email: value,
                  }))
                }
              />
            </StyledLoginLabel>

            <StyledLoginLabel>
              Password
              <StyledInputWrapper>
                <StyledLoginInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={({ target: { value } }) =>
                    setForm((prev) => ({
                      ...prev,
                      password: value,
                    }))
                  }
                />
                <TogglePasswordButton type="button" onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <PiEyeSlash /> : <PiEye />}
                </TogglePasswordButton>
              </StyledInputWrapper>
            </StyledLoginLabel>
            <StyledLoginBtn onClick={handleSubmit}>Login</StyledLoginBtn>
          </StyledFormWrapper>
        </form>

        <StyledSubTitle>
          Don't have account? <StyledSignUpBtn>Sign Up</StyledSignUpBtn>
        </StyledSubTitle>
      </StyledLoginCard>
    </StyledLoginCon>
  );
};

export default Login;

import { signIn, signOut } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";
import { initialLoginForm } from "@/initialStateData/initialStateData";
import { TLoginParams, TLoginResponseStatus } from "@/types/mainSchema";
import { showSwalConfirm, showSwalError, showSwalLoader, showSwalSuccess, showSwalWarning } from "@/contants/swal";

const useAuth = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [form, setForm] = useState<TLoginParams>(initialLoginForm);

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      showSwalWarning("Please Check your email and password");
      return;
    }

    showSwalLoader(t("Loading, please wait..."));

    const response = (await signIn("user-credentials", {
      userId: form.email,
      password: form.password,
      redirect: false,
    })) as TLoginResponseStatus;

    Swal.close();

    if (!response.ok) {
      showSwalError(t("Please Check your email and password"), t("확인"));
      return;
    }

    showSwalSuccess(t("You are logged in"), t("확인"));

    router.reload();
  };

  const handleLogout = async () => {
    const toConfirm = await showSwalConfirm(t("Do you want to log out?"));
    if (!toConfirm) return;

    signOut();
  };

  return { form, setForm, handleLogin, handleLogout };
};

export default useAuth;

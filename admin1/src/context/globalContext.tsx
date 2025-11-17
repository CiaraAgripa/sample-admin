import { TCurrentUser } from "@/types/mainSchema";
import { Dispatch, ReactNode, SetStateAction, useEffect, useMemo, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

type TGlobalContext = {
  currentUser: TCurrentUser | null;
  setCurrentUser: (user: TCurrentUser | null) => void;
  token?: string;
  isLoggedOut: boolean | null;
  setIsLoggedOut: Dispatch<SetStateAction<boolean | null>>;
};

const GlobalContext = createContext<TGlobalContext | undefined>(undefined);

type TGlobalContextProviderProps = {
  children: ReactNode;
  user: TCurrentUser | null;
  token?: string;
};

export const GlobalContextProvider: React.FC<TGlobalContextProviderProps> = ({ user, token, children }) => {
  const [currentUser, setCurrentUser] = useState<TCurrentUser | null>(null);
  const [isLoggedOut, setIsLoggedOut] = useState<boolean | null>(null);

  useEffect(() => {
    if (user) {
      setCurrentUser((prev) => (prev ? prev : user));
    }
  }, [user]);

  const value = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      token,
      isLoggedOut,
      setIsLoggedOut,
    }),
    [currentUser, setCurrentUser, token, isLoggedOut, setIsLoggedOut]
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useSafeSelector = <T,>(selector: (ctx: TGlobalContext) => T): T => {
  return useContextSelector(GlobalContext, (ctx) => {
    if (!ctx) {
      throw new Error("useGlobalContext hook must be used within a GlobalContextProvider");
    }
    return selector(ctx);
  });
};

export const useCurrentUser = () => useSafeSelector((ctx) => ctx.currentUser);
export const useSetCurrentUser = () => useSafeSelector((ctx) => ctx.setCurrentUser);
export const useToken = () => useSafeSelector((ctx) => ctx.token);
export const useIsLoggedOut = () => useSafeSelector((ctx) => ctx.isLoggedOut);
export const useSetIsLoggedOut = () => useSafeSelector((ctx) => ctx.setIsLoggedOut);

import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useContextSelector, createContext } from "use-context-selector";

type TContollerProps = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
  toggleSidebar: () => void;
};

const ControllerContext = createContext<TContollerProps>(null as unknown as TContollerProps);

export const ControllerProvider = ({ children }: { children: ReactNode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return <ControllerContext.Provider value={{ isSideBarOpen, setIsSideBarOpen, toggleSidebar }}>{children}</ControllerContext.Provider>;
};

const useSafeSelector = <T,>(selector: (ctx: TContollerProps) => T): T => {
  return useContextSelector(ControllerContext, (ctx) => {
    if (!ctx) {
      throw new Error("useControllerContext hook must be used within a ControllerContextProvider");
    }
    return selector(ctx);
  });
};

export const useIsSideBarOpen = () => useSafeSelector((ctx) => ctx.isSideBarOpen);
export const useSetIsSideBarOpen = () => useSafeSelector((ctx) => ctx.setIsSideBarOpen);
export const useToggleSideBar = () => useSafeSelector((ctx) => ctx.toggleSidebar);

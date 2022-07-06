import React, { useState } from "react";

type menuType = {
  isopen: boolean;
  setMenuStatus: (a: (a: boolean) => boolean) => void;
};

const menuConext = React.createContext<menuType>({
  isopen: false,
  setMenuStatus: () => {},
});

export const useDrawer = () => {
  return React.useContext(menuConext);
};

interface LayoutProps {
  children: React.ReactNode;
} 

export const AppMenuProvider = ({ children }: LayoutProps) => {
  const [isopen, setMenuStatus] = useState<boolean>(false);

  return (
    <menuConext.Provider value={{ isopen, setMenuStatus }}>
      {children}
    </menuConext.Provider>
  );
};

import { logRoles } from '@testing-library/react';
import React, { useContext, useState, useRef } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [currentBtn, setCurrentBtn] = useState(null);

  const handleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  // submenu
  const closeSubmenu = (e) => {
    setIsSubmenuOpen(false);
  };
  const openSubmenu = (e) => {
    setIsSubmenuOpen(true);
    setCurrentBtn(e.target.dataset.id);
    // console.log(currentBtn);
  };
  return (
    <AppContext.Provider
      value={{
        handleSidebar,
        sidebarIsOpen,
        closeSubmenu,
        isSubmenuOpen,
        openSubmenu,
        currentBtn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

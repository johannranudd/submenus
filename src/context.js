import { logRoles } from '@testing-library/react';
import React, { useContext, useState, useRef } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const btnRef = useRef();

  const handleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  const closeSubmenu = (e) => {
    btnRef.current.style.display = 'none';
  };
  const openSubmenu = (e, btnRef) => {
    if (e.target !== btnRef.current.previousSibling) {
      btnRef.current.style.display = 'block';
      console.log('yes');
    }
    console.log(btnRef.current.previousSibling);
  };
  return (
    <AppContext.Provider
      value={{
        handleSidebar,
        sidebarIsOpen,
        closeSubmenu,
        // isSubmenuOpen,
        openSubmenu,
        btnRef,
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

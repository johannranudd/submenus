import { logRoles } from '@testing-library/react';
import React, { useContext, useState, useRef } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  // const closeSubmenu = (e) => {
  //   setIsSubmenuOpen(false);
  //   // console.log(isSubmenuOpen);
  // };
  // const openSubmenu = (e) => {
  //   if (e.target !== btnRef.current) {
  //     console.log('yes');
  //     setIsSubmenuOpen(true);
  //   } else {
  //     console.log('no');
  //   }
  // };
  return (
    <AppContext.Provider
      value={{
        handleSidebar,
        sidebarIsOpen,
        // closeSubmenu,
        // isSubmenuOpen,
        // openSubmenu,
        // btnRef,
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

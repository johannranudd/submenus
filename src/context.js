import React, { useContext, useState, useRef } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const btnRef = useRef();

  const handleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  const closeSubmenu = (e) => {
    // setIsSubmenuOpen(!isSubmenuOpen);
    console.log(e.target);
  };
  return (
    <AppContext.Provider
      value={{
        handleSidebar,
        sidebarIsOpen,
        closeSubmenu,
        isSubmenuOpen,
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

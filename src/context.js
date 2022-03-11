import { logRoles } from '@testing-library/react';
import React, { useContext, useState, useRef } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [currentBtn, setCurrentBtn] = useState(null);
  const [centerOfBtn, setCenterOfBtn] = useState(null);
  const [bottomOfBtn, setBottomOfBtn] = useState(null);

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
    const left = e.target.getBoundingClientRect().left;
    const right = e.target.getBoundingClientRect().right;
    const bottom = e.target.getBoundingClientRect().bottom;
    // const xx = e.target.getBoundingClientRect().x;
    const add = right + left;
    const center = add / 2;
    setCenterOfBtn(center);
    setBottomOfBtn(bottom);
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
        centerOfBtn,
        bottomOfBtn,
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

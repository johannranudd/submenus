import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
    // console.log(sidebarIsOpen);
  };
  return (
    <AppContext.Provider value={{ handleSidebar, sidebarIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

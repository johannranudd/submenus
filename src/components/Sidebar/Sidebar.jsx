import React from 'react';
import { StyledDiv } from './Sidebar.style';
import { useGlobalContext } from '../../context';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  const { sidebarIsOpen, handleSidebar } = useGlobalContext();
  return (
    <StyledDiv>
      <div className={sidebarIsOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='inner-sidebar'>
          <button className='close-sidebar-btn' onClick={handleSidebar}>
            <AiOutlineClose />
          </button>
          <h1>sidebar</h1>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Sidebar;

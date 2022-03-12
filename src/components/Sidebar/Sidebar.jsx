import React from 'react';
import { StyledDiv } from './Sidebar.style';
import { useGlobalContext } from '../../context';
import { AiOutlineClose } from 'react-icons/ai';
import sublinks from '../../data';

const Sidebar = () => {
  //   console.log(sublinks);
  const { sidebarIsOpen, handleSidebar } = useGlobalContext();
  return (
    <StyledDiv>
      <div className={sidebarIsOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='inner-sidebar'>
          <button className='close-sidebar-btn' onClick={handleSidebar}>
            <AiOutlineClose />
          </button>
          <SubLinks />
        </div>
      </div>
    </StyledDiv>
  );
};

const SubLinks = () => {
  return (
    <div className='sublinks-container'>
      {sublinks.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.page}</h4>
            <ul>
              {item.links.map((link, index) => {
                const { label, icon, url } = link;
                return (
                  <a href={url} key={index}>
                    <span>{icon}</span>
                    <p>{label}</p>
                  </a>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

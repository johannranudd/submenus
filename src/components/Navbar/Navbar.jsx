import React, { useState, useEffect, useRef } from 'react';
import { StyledDiv } from './Navbar.style';
import { images } from '../../images/images';
import sublinks from '../../data';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
// import { handleSubmenu } from './Navbar.logic';
// import { useNavbarLogic } from './Navbar.logic';

const Navbar = () => {
  const { handleSidebar, closeSubmenu } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('menu-btn')) {
      closeSubmenu();
    }
  };

  return (
    <StyledDiv onMouseOver={handleSubmenu}>
      <nav className='inner-nav'>
        <img src={images.logo} alt='' />
        <ul className='menu-items'>
          {sublinks.map((item, index) => {
            return (
              <MenuButtons
                key={index}
                item={item}
                // isSubmenuOpen={isSubmenuOpen}
                // setIsSubmenuOpen={setIsSubmenuOpen}
              />
            );
          })}
        </ul>
        <button className='sign-in-btn'>Sign in</button>
        <button className='sidebar-btn' onClick={handleSidebar}>
          <FaBars />
        </button>
      </nav>
    </StyledDiv>
  );
};

const MenuButtons = ({ item }) => {
  const { openSubmenu } = useGlobalContext();

  return (
    <>
      <li>
        <button
          className='menu-btn'
          data-id={item.page}
          onMouseEnter={(e) => openSubmenu(e)}
        >
          {item.page}
        </button>
      </li>
    </>
  );
};

export default Navbar;

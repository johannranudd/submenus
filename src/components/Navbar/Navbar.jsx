import React, { useState, useEffect, useRef } from 'react';
import { StyledDiv } from './Navbar.style';
import { images } from '../../images/images';
import sublinks from '../../data';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
// import { handleSubmenu } from './Navbar.logic';
// import { useNavbarLogic } from './Navbar.logic';

const Navbar = () => {
  const { handleSidebar } = useGlobalContext();

  return (
    <StyledDiv>
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
  const { closeSubmenu, isSubmenuOpen, btnRef } = useGlobalContext();
  // console.log(isSubmenuOpen);

  // useEffect(() => {
  //   console.log(btnRef);
  // }, [isSubmenuOpen]);

  // const closeSubmenu = (e) => {
  //   const submenu = e.currentTarget.nextElementSibling;
  // };

  return (
    <>
      <li>
        <button
          className='menu-btn'
          onMouseEnter={() => closeSubmenu}
          ref={btnRef}
        >
          {item.page}
        </button>
        {isSubmenuOpen && <h1>zsdgfsdfg</h1>}
      </li>
    </>
  );
};

// const Submenu = () => {
//   return ;
// };
export default Navbar;

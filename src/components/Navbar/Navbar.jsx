import React, { useState, useEffect } from 'react';
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
  // console.log(item);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  useEffect(() => {
    console.log(isSubmenuOpen);
  }, [isSubmenuOpen]);

  return (
    <>
      <li>
        <button
          className='menu-btn'
          onMouseEnter={() => setIsSubmenuOpen(true)}
          // onMouseLeave={() => setIsSubmenuOpen(false)}
        >
          {item.page}
        </button>
        {isSubmenuOpen && <Submenu />}
      </li>
    </>
  );
};

const Submenu = () => {
  return <h1>zsdgfsdfg</h1>;
};
export default Navbar;

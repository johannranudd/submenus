import React from 'react';
import { StyledDiv } from './Navbar.style';
import { images } from '../../images/images';
import sublinks from '../../data';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <StyledDiv>
      <nav className='inner-nav'>
        <img src={images.logo} alt='' />
        <ul className='menu-items'>
          {sublinks.map((item, index) => {
            return (
              <li key={index}>
                <a href='#'>{item.page}</a>
              </li>
            );
          })}
        </ul>
        <button className='sign-in-btn'>Sign in</button>
        <button className='sidebar-btn'>
          <FaBars />
        </button>
      </nav>
    </StyledDiv>
  );
};

export default Navbar;

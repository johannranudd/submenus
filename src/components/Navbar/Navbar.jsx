import React from 'react';
import { StyledDiv } from './Navbar.style';
import { images } from '../../images/images';

const Navbar = () => {
  return (
    <StyledDiv>
      <nav className='innner-nav'>
        <img src={images.hero} alt='' />
      </nav>
    </StyledDiv>
  );
};

export default Navbar;

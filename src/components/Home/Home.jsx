import React from 'react';
import { StyledDiv } from './Home.style';
import { images } from '../../images/images';

const Home = () => {
  return (
    <StyledDiv>
      <img className='hero' src={images.hero} alt='' />
    </StyledDiv>
  );
};

export default Home;

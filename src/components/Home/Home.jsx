import React from 'react';
import { StyledDiv } from './Home.style';
import { images } from '../../images/images';
import { useGlobalContext } from '../../context';

const Home = () => {
  // const { closeSubmenu } = useGlobalContext();
  return (
    <StyledDiv>
      <img className='hero' src={images.hero} alt='background gradient' />
      <section className='homepage-container'>
        <div className='text-container'>
          <h2>
            Payments infrastructure <br /> for the internet
          </h2>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='start-btn'>Start Now</button>
        </div>
        <img src={images.phone} alt='phone' className='phone-img' />
      </section>
    </StyledDiv>
  );
};

export default Home;

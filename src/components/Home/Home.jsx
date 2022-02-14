import React from 'react';
import { StyledDiv } from './Home.style';
import { images } from '../../images/images';

const Home = () => {
  return (
    <StyledDiv>
      <img className='hero' src={images.hero} alt='background gradient' />
      <section className='homepage-container'>
        <div className='text-container'>
          <h2>Payments infrastructure for the internet</h2>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='start-btn'>Start Now</button>
        </div>
      </section>
    </StyledDiv>
  );
};

export default Home;

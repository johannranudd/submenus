import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* position: absolute;
  top: 0; */
  /* width: 100%; */
  position: relative;
  overflow: hidden;
  height: 100vh;
  .hero {
    position: absolute;
    top: 0;
    z-index: -9;
    width: 120vh;
    min-width: 100vw;
  }
  .homepage-container {
    width: 90%;
    margin: auto;
    margin-top: 10rem;
    max-width: 1100px;
    display: grid;
    align-items: center;
    .text-container {
      max-width: 500px;
      h2 {
        font-size: 3rem;
        margin-bottom: 2rem;
        color: #1e2842;
      }
      p {
        color: #696969;
        margin-bottom: 2rem;
      }
    }
    .phone-img {
      display: none;
    }
  }

  /* MEDIA */
  @media (min-width: 800px) {
    .hero {
    }
    .homepage-container {
      grid-template-columns: 70% 30%;
      .text-container {
        max-width: 100%;
        h2 {
          max-width: 500px;
        }
        p {
          font-size: 1.1rem;
          letter-spacing: 0.1rem;
          line-height: 1.9rem;
          width: 90%;
        }
      }
      .phone-img {
        display: flex !important;
        width: 200px;
        margin-left: auto;
      }
    }
  }
  @media (min-width: 1200px) {
    .homepage-container {
      .text-container {
        h2 {
          font-size: 4.2rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
      .phone-img {
        width: 240px;
      }
    }
  }
`;

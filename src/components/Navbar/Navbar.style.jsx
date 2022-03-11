import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  width: 95%;
  max-width: 1100px;
  margin: auto;
  .inner-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    width: 100%;

    img {
      width: 100%;
      max-width: 130px;
      margin-left: -15px;
    }
    .menu-items {
      display: none;
    }
    .sign-in-btn {
      display: none;
    }
    .sidebar-btn {
      display: flex;
      cursor: pointer;
    }
  }

  /* MEDIA */
  @media (min-width: 800px) {
    .inner-nav {
      .menu-items {
        display: flex;
        align-items: center;
        li {
          .menu-btn {
            background: black;
            border-radius: 0;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            z-index: 99;
          }
        }
      }
      .sign-in-btn {
        display: inline;
      }
      .sidebar-btn {
        display: none;
      }
    }
  }
`;

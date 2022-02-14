import styled from 'styled-components';

export const StyledDiv = styled.div`
  background: transparent;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  .inner-nav {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    width: 100%;
    img {
      width: 100%;
      max-width: 130px;
    }
    .menu-items {
      display: none;
    }
    .sign-in-btn {
      display: none;
    }
    .sidebar-btn {
      display: flex;
    }
  }

  /* MEDIA */
  @media (min-width: 800px) {
    .inner-nav {
      .menu-items {
        display: flex;
        align-items: center;
        li {
          a {
            display: inline-block;
            padding: 1rem;
            color: #000;
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

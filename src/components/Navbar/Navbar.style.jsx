import styled from 'styled-components';

export const StyledDiv = styled.div`
  background: transparent;

  .inner-nav {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    width: 95%;
    max-width: 1500px;
    margin: auto;
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
      background: #000;
      color: white;
      border: none;
      padding: 0.4rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.3rem;
    }
  }

  /* MEDIA */
  @media (min-width: 768px) {
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
        background: #000;
        color: white;
        border: none;
        padding: 0.5rem;
        border-radius: 5px;
        cursor: pointer;
      }
      .sidebar-btn {
        display: none;
      }
    }
  }
`;

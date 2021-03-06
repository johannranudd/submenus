import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* background-color: rgba(000, 000, 000, 0.5); */
  .sidebar {
    z-index: 2;
    transform: scale(0, 0);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(000, 000, 000, 0.5);
    transition: 0.4s;
    .inner-sidebar {
      width: 95%;
      height: 95%;
      max-width: 600px;
      background: white;
      border-radius: 5px;
      .close-sidebar-btn {
        display: flex;
        margin: 1rem;
        margin-left: auto;
      }
      .sublinks-container {
        padding: 0 2rem;
        > div {
          margin-bottom: 2rem;
          h4 {
            margin-bottom: 1rem;
            font-size: 1.1rem;
            text-transform: capitalize;
          }
        }
        ul {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1rem;
          a {
            display: flex;
            align-items: center;
            color: #445d70;
            text-transform: capitalize;
            span {
              display: flex;
              margin-right: 0.3rem;
            }
          }
        }
      }
    }
  }
  .show-sidebar {
    transform: scale(1, 1);
  }

  /* MEDIA */
  @media (min-width: 800px) {
    .sidebar {
      display: none;
    }
  }
`;

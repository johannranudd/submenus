import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* background-color: rgba(000, 000, 000, 0.5); */
  .sidebar {
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
      background: white;
      .close-sidebar-btn {
        display: flex;
        margin: 1rem;
        margin-left: auto;
      }
      .sublinks-container {
        padding: 0 2rem;
        ul {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          a {
            display: inline-block;
            /* width: 200px; */
          }
        }
      }
    }
  }
  .show-sidebar {
    transform: scale(1, 1);
  }
`;

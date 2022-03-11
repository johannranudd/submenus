import styled from 'styled-components';

export const StyledDiv = styled.div`
  .submenu {
    display: none;
    transition: 0.3s;
  }
  .show-submenu {
    display: block;
    background: white;
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    ::after {
      position: absolute;
      top: 3px;
      left: 50%;
      content: '';
      width: 20px;
      height: 20px;
      background-color: white;
      z-index: -1;
      transform: rotate(45deg) translateX(-50%);
    }
    ul {
      /* display: grid;
      place-items: center; */
      margin-left: 2rem;
      h4 {
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
      li {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 4rem;
        row-gap: 2rem;
        a {
          display: flex;
          align-items: center;
          color: #445d70;
          span {
            display: flex;
          }
        }
      }
    }
  }
`;

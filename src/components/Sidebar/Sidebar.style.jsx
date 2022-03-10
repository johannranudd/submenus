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
    }
  }
  .show-sidebar {
    transform: scale(1, 1);
    /* border: 1rem solid rgba(000, 000, 000, 0.5); */
  }
`;

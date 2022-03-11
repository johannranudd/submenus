import React from 'react';
import { StyledDiv } from './Submenu.style';
import { useGlobalContext } from '../../context';
import sublinks from '../../data';

const Submenu = () => {
  const { isSubmenuOpen, currentBtn } = useGlobalContext();
  //   console.log(isSubmenuOpen);
  //   console.log(currentBtn);
  return (
    <StyledDiv>
      <div className={isSubmenuOpen ? 'submenu show-submenu' : 'submenu'}>
        {sublinks.map((item, index) => {
          if (item.page === currentBtn) {
            return (
              <div key={index}>
                <h4>{item.page}</h4>
                {item.links.map((links, index) => {
                  const { label, icon, url } = links;
                  return (
                    <a href={url} key={index}>
                      <span>{icon}</span>
                      {label}
                    </a>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
    </StyledDiv>
  );
};

export default Submenu;

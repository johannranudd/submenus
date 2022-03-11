import React, { useRef, useEffect } from 'react';
import { StyledDiv } from './Submenu.style';
import { useGlobalContext } from '../../context';
import sublinks from '../../data';

const Submenu = () => {
  const { isSubmenuOpen, currentBtn, centerOfBtn, bottomOfBtn } =
    useGlobalContext();
  const submenuRef = useRef();

  useEffect(() => {
    let width = submenuRef.current.getBoundingClientRect().width;
    submenuRef.current.style.position = 'absolute';
    submenuRef.current.style.left = `${centerOfBtn - width / 2}px`;
    submenuRef.current.style.top = `${bottomOfBtn}px`;
  }, [centerOfBtn]);

  useEffect(() => {
    submenuRef.current.style.position = 'absolute';
    submenuRef.current.style.left = '40%';
  }, []);

  return (
    <StyledDiv>
      <div
        className={isSubmenuOpen ? 'submenu show-submenu' : 'submenu'}
        ref={submenuRef}
      >
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

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
    submenuRef.current.style.top = `${bottomOfBtn - 3}px`;
  }, [centerOfBtn]);

  useEffect(() => {
    submenuRef.current.style.position = 'absolute';
    submenuRef.current.style.top = '70px';
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
              <ul key={index}>
                <h4>{item.page}</h4>
                <li>
                  {item.links.map((links, index) => {
                    const { label, icon, url } = links;
                    return (
                      <a href={url} key={index}>
                        <span>{icon}</span>
                        <p>{label}</p>
                      </a>
                    );
                  })}
                </li>
              </ul>
            );
          }
        })}
      </div>
    </StyledDiv>
  );
};

export default Submenu;

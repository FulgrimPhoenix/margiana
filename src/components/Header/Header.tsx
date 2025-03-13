import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { constants } from "../../utils/constants";

interface IHeader {
  mode: 0 | 1;
}

const Header = ({ mode }: IHeader): React.ReactElement => {
  const headerConstants = constants.header;
  return (
    <>
      <header className="header">
        <a className={"header__logo-link"} href={"#"}>
          <img
            className={"header__logo-img"}
            src={headerConstants.logo}
            alt="логотип"
          />
        </a>
        <div className="header__nav-link-container">
          {headerConstants.links.map((item) => (
            <NavLink
              key={item.title}
              className={"header__nav-link"}
              to={item.link}
            >
              {item.title}
            </NavLink>
          ))}
          {mode ? (
            <NavLink
              className={"header__profile-link"}
              to={headerConstants.profileLink.link}
            >
              <img
                src={headerConstants.profileLink.icon}
                alt="иконка профиля"
              />
            </NavLink>
          ) : null}
        </div>
      </header>
    </>
  );
};

export default Header;

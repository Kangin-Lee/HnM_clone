import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from "react-burger-menu";
// import "react-burger-menu/build/styles.css";

const HamburgerMenu = ({ authenticate, goToLogin, search }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  return (
    <div className="hamburger-menu">
      <Menu
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        right // 메뉴를 오른쪽에 표시합니다.
        className={"my-custom-menu"} // 커스텀 클래스 추가
      >
        <ul className="menu-list">
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <div>
          <div className="hamburger-login-btn" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div style={{ marginLeft: "5px" }}>
              {authenticate == true ? "로그아웃" : "로그인"}
            </div>
          </div>
          <div className="hamburger-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              placeholder="제품 검색"
              onKeyPress={(event) => search(event)}
            />
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;

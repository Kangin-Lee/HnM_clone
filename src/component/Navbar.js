import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Navbar = () => {
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
  return (
    <div>
      <div className="nav-top">
        <div className="login-btn">
          <FontAwesomeIcon icon={faUser} />
          <div style={{ marginLeft: "5px" }}>로그인</div>
        </div>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="상품 조회" />
        </div>
      </div>
      <Container>
        <div className="nav-section">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png"
          />
        </div>
        <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

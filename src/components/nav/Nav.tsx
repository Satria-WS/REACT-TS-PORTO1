import React from "react";

import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState, FC } from "react";

const Nav: React.FunctionComponent = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          setActiveNav("#")
        }
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          setActiveNav("#about")
        }
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          setActiveNav("#experience")
        }
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          setActiveNav("#services")
        }
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          setActiveNav("#contact")
        }
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;

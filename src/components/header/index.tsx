import { useState } from "react";
import "./header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { EllipsisVertical } from "lucide-react";

export function Header({ activeSession }: { activeSession: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <span className="logo">
        <a href="#principal">
          <h2 className="title">Lucas Felix</h2>
          <p>Desenvolvedor Front End/Mobile</p>
        </a>
      </span>

      <EllipsisVertical
        className={
          !isMobileMenuOpen ? "menu-toggle" : "menu-toggle menu-toggle-acctive"
        }
        size={25}
        color="#FFF"
        onClick={toggleMobileMenu}
      />
      <nav className={isMobileMenuOpen ? "mobile-menu" : "desktop-menu"}>
        <ul>
          <li
            className={
              activeSession === "home" ? "nav-item-active" : "nav-item"
            }
          >
            <a href="#home">Inicio</a>
          </li>
          <li
            className={
              activeSession === "sobre" ? "nav-item-active" : "nav-item"
            }
          >
            <a href="#sobre">Sobre</a>
          </li>
          <li
            className={
              activeSession === "projetos" ? "nav-item-active" : "nav-item"
            }
          >
            <a href="#projetos">Projetos</a>
          </li>
          <li
            className={
              activeSession === "tecs" ? "nav-item-active" : "nav-item"
            }
          >
            <a href="#tecs">Tecnologias</a>
          </li>
        </ul>
      </nav>
      <div className="social">
        <span className="icon-area">
          <a
            href="https://github.com/pheonix5"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="github" />
          </a>
        </span>
        <span className="icon-area">
          <a
            href="https://www.linkedin.com/in/lucas-felix-a986a7289/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
        </span>
      </div>
    </header>
  );
}

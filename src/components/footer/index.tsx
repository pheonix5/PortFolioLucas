import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerText">
        <p>
          Email para contato:{" "}
          <span className="textoDestaque">lucas.felix413@gmail.com</span>
          <br></br>
          Feito por <span className="textoDestaque">Lucas Felix</span>
        </p>
      </div>

      <div className="area-icons">
        <li className="iconFooter">
          <a
            href="https://github.com/pheonix5"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="#0ea4e9a1" />
          </a>
        </li>
        <li className="iconFooter">
          <a
            href="https://www.linkedin.com/in/lucas-felix-a986a7289/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="#0ea4e9a1" />
          </a>
        </li>
      </div>
    </footer>
  );
}
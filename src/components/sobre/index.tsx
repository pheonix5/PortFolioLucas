// import React from "react";
import {
  FaRegUserCircle,
  FaUniversity,
  FaTv,
  // FaSearch,
  FaMouse,
  FaHandshake,
} from "react-icons/fa";

import DeveloperImg from "../../assets/developer.svg";

import { TypeAnimation } from "react-type-animation";
import "./sobre.css";
import "animate.css";

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="content-sobre">
        <TypeAnimation
          sequence={[
            "Sobre Mim",
            1000, // Waits 1s
            " ",
            1000,
            " ",
            () => {},
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="textTyped animate__animated animate__bounce"
          style={{ textAlign: "center" }}
        />
        <div className="sobreBlocos">
          <div className="container-img">
            <img src={DeveloperImg} className="avatar" />
          </div>

          <div className="container-textos">
            <p className="texto paragrafoSobre textoNegrito">
              <FaRegUserCircle
                size={28}
                color="#00d2df"
                className="moboHidden"
              />{" "}
              Eu me chamo Lucas Felix,tenho 28 anos e sou apaixonado por
              resolver desafios através da programação.
            </p>
            <p className="texto paragrafoSobre textoNegrito">
              <FaUniversity size={24} color="#00d2df" className="moboHidden" />{" "}
              Graduado em Análise e Desenvolvimento de Sistemas pela
              Universidade Projeção (DF).
            </p>
            <p className="texto paragrafoSobre textoNegrito">
              <FaTv size={28} color="#00d2df" className="moboHidden" /> Meu
              objetivo é contribuir para melhorar a vida das pessoas, criando
              soluções que sejam acessíveis e práticas.
            </p>
            <p className="texto paragrafoSobre textoNegrito">
              <FaMouse size={28} color="#00d2df" className="moboHidden" />{" "}
              Trabalho como desenvolvedor front-end e mobile, com foco em React
              e React Native. Além disso, também tenho experiência em Estrutura
              e Modelagem de Dados, SQL e Firebase.
            </p>
            <p className="texto paragrafoSobre textoNegrito">
              <FaHandshake size={32} color="#00d2df" className="moboHidden" />{" "}
              Estou Aberto a novas oportunidades e desafios. Com novas
              linguagens e tecnologias. Estou disposto a aprender e me adaptar a
              novos ambientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;

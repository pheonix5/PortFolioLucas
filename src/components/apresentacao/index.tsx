import "./apresentacao.css";
import fotoDePerfil from "../../assets/avatar.png";
import { TypeAnimation } from "react-type-animation";
import "animate.css";
import CurriculoLucas from "../../assets/CurriculoLucas.pdf";
import { Button } from "react-bootstrap";

export function Apresentacao() {
  return (
    <section className="apresentacao" id="home">
      <div className="containter-title">
        <h1 className="texto title animate__animated animate__bounce">
          {" "}
          Olá, meu nome é Lucas. <br></br>Bem vindo ao meu portifólio.
        </h1>

        <TypeAnimation
          sequence={[
            "TypeScript Developer",
            1000, // Waits 1s
            "React Native Developer",
            2000,
            "React Developer",
            () => {},
          ]}
          wrapper="span"
          speed={8}
          cursor={true}
          repeat={Infinity}
          className="typingHome animate__animated animate__bounce"
        />

        <Button
          variant="outline-primary"
          size="sm"
          className="w-25 pulse"
          type="button"
          href={CurriculoLucas}
        >
          Download CV
        </Button>
      </div>

      <div className="div-img">
        <img
          className="img animate__animated animate__bounce"
          src={fotoDePerfil}
          alt="foto de perfil"
        />
      </div>
    </section>
  );
}

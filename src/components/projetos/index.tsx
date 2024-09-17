import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./projetos.css";
import { ModalProject } from "../modalProject";
import { ProjectsProps } from "../../App";

import AppleSvg from "../../assets/appsvg.svg";
import PlaySvg from "../../assets/playsvg.svg";

export default function Projetos({ projects }: { projects: ProjectsProps[] }) {
  const [selectedProject, setSelectedProject] =
    useState<ProjectsProps | null>();

  function handleShowCarousel(projectid: ProjectsProps) {
    setSelectedProject(projectid);
  }

  function handleCloseCarousel() {
    setSelectedProject(null);
  }

  return (
    <section className="projetos" id="projetos">
      <h1 className="titulo">Meus principais projetos</h1>
      <div className="cardsProjetos">
        {projects.map((projeto) => {
          return (
            <Card className="card" key={projeto.titulo}>
              <Card.Img
                variant="top"
                src={projeto.imagens[1]}
                className="cardImg"
                onClick={() => handleShowCarousel(projeto)}
                style={{ cursor: "pointer" }}
              />
              <Card.Body>
                <Card.Title className="textoDestaque">
                  {projeto.titulo}
                </Card.Title>
                <Card.Text>{projeto.descricao}</Card.Text>
              </Card.Body>

              <Card.Body className="Buttonlinks">
                {projeto.type === "web" && (
                  <Card.Link href={projeto.deploy.web} target="_blank">
                    <Button variant="dark" className="textoDestaque">
                      Deploy
                    </Button>
                  </Card.Link>
                )}
                {projeto.deploy.appstore && (
                  <Card.Link href={projeto.deploy.appstore} target="_blank">
                    <Button
                      variant="white"
                      className="textoDestaque buttonStores border-dark"
                    >
                      <img src={AppleSvg} className="iconApple" />
                    </Button>
                  </Card.Link>
                )}

                {projeto.deploy.playstore && (
                  <Card.Link href={projeto.deploy.playstore} target="_blank">
                    <Button
                      variant="dark"
                      className="buttonStores textoDestaque"
                    >
                      <img src={PlaySvg} className="iconStore" />
                    </Button>
                  </Card.Link>
                )}
                {projeto.github && (
                  <Card.Link href={projeto.github} target="_blank">
                    <Button variant="secondary">GitHub</Button>
                  </Card.Link>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>

      {/* Renderiza o Carousel diretamente no lugar do Modal */}
      {selectedProject && (
        <ModalProject
          handleCloseCarousel={() => handleCloseCarousel()}
          selectedProject={selectedProject}
        />
      )}
    </section>
  );
}

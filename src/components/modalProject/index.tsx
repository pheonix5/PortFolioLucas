import { Button, Carousel } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./modal.css"; // Certifique-se de que esse caminho está correto
import { ProjectsProps } from "../../App";

type ModalProps = {
  selectedProject: ProjectsProps;
  handleCloseCarousel: () => void;
};

export function ModalProject({
  selectedProject,
  handleCloseCarousel,
}: ModalProps) {
  return ReactDOM.createPortal(
    <div className="customModal">
      <div className="modalOverlay" onClick={handleCloseCarousel}></div>
      <div className="modalContent">
        <Button
          variant="secondary"
          className="closeButton"
          onClick={handleCloseCarousel}
        >
          Fechar
        </Button>
        <Carousel slide={false}>
          {selectedProject.imagens.map((imgUrl, index) => (
            <Carousel.Item key={index}>
              <div className="carouselImageContainer">
                <img
                  src={imgUrl}
                  alt={`Slide ${index}`}
                  className="carouselImage"
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>,
    document.body // Usando Portal para garantir que o modal seja inserido no body
  );
}

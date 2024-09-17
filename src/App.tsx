import { Apresentacao } from "./components/apresentacao";
import { Conhecimentos } from "./components/conhecimentos";
import { Footer } from "./components/footer";
import Sobre from "./components/sobre";
import "./App.css";
import { Header } from "./components/header";
import Projetos from "./components/projetos";
import { db } from "./services/firebaseConfig";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
// import { ModalProject } from "./components/modalProject";

export type ProjectsProps = {
  id: string;
  deploy: {
    appstore?: string;
    playstore?: string;
    web?: string;
  };
  descricao: string;
  github: string;
  imagens: string[];
  titulo: string;
  type: "mobile" | "web" | string;
};

export default function App() {
  const [activeSession, setActiveSession] = useState("home");
  const [projects, setProjects] = useState<ProjectsProps[] | null>([]);

  useEffect(() => {
    function handleScroll() {
      let currentSection = "";
      const sections = document.querySelectorAll("section");
      // console.log("Section atual " + sections.id);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.id;
        }
      });

      setActiveSession(currentSection);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const projectsRef = collection(db, "projects");
    await getDocs(projectsRef)
      .then((snapshot) => {
        const lista: ProjectsProps[] = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            descricao: doc.data().descricao,
            imagens: doc.data().imagens,
            deploy: doc.data().deploy,
            github: doc.data().github,
            type: doc.data().type,
          });
        });

        setProjects(lista);
      })
      .catch((error) => {
        console.log("Erro Ao buscar lista de projetos -> " + error);
      });
  }

  return (
    <section className="container-main">
      <Header activeSession={activeSession} />

      <section className="portifolio" id="portifolio">
        <Apresentacao />
        <Sobre />
        <Projetos projects={projects!} />
        <Conhecimentos />
        <Footer />
      </section>
    </section>
  );
}

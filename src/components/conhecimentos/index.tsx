import "./conhecimentos.css";

type SkillsProps = {
  id: string;
  img: string;
  titulo: string;
  descricao: string;
};

const skills: SkillsProps[] = [
  {
    id: "0",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
    titulo: "HTML 5",
    descricao:
      "É uma linguagem usada para a publicação de conteúdo (texto, imagens, vídeos, áudio etc.) na web.",
  },
  {
    id: "1",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
    titulo: "CSS 3",
    descricao:
      "É um mecanismo para dar estilo a um código criado por linguagens como HTML, XML ou XHTML.",
  },
  {
    id: "2",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
    titulo: "Bootstrap",
    descricao:
      "É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples",
  },
  {
    id: "3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    titulo: "Tailwind css",
    descricao:
      "É um framework do CSS, o qual fornece classes utilitárias de propósito único que são, em sua maioria, opinativas que facilitam a projetação de páginas da web",
  },
  {
    id: "4",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    titulo: "JavaScript",
    descricao:
      "É uma linguagem de programação criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web",
  },
  {
    id: "5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    titulo: "TypeScript",
    descricao:
      "É um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem",
  },
  {
    id: "6",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    titulo: "React",
    descricao:
      "É uma biblioteca do javaScript para a criação de interfaces de usuário, podendo ser usada com outras bibliotecas ou frameworks de JavaScript",
  },
  {
    id: "7",
    img: "https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png",
    titulo: "React Native",
    descricao:
      "React Native é um framework de código aberto que permite a criação de aplicativos móveis para iOS e Android usando a mesma base de código. O framework foi desenvolvido pelo Facebook em 2015 e é baseado na linguagem JavaScrip",
  },

  {
    id: "8",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    titulo: "Node js",
    descricao:
      "É um ambiente de execução Javascript server-side com  alta capacidade de escala, flexibilidade e baixo custo",
  },
  {
    id: "9",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    titulo: "Git",
    descricao: "É um sistema de controle de versão open-source",
  },

  {
    id: "10",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg",
    titulo: "mySQL",
    descricao:
      "É um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface",
  },
  {
    id: "11",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    titulo: "Java",
    descricao:
      "Java é a base de praticamente todos os tipos de aplicativo em rede e é o padrão global para desenvolvimento e fornecimento de aplicativos para celular, jogos, conteúdo on-line e software corporativo",
  },
  {
    id: "12",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg",
    titulo: "Firebase",
    descricao:
      "O Firebase é uma plataforma de desenvolvimento de aplicativos do Google que permite criar e melhorar apps para Android, iOS e Web. Ele é conhecido como Backend as a Service (BaaS) e fornece a infraestrutura necessária para o funcionamento do software",
  },
  {
    id: "13",
    img: "https://www.svgrepo.com/show/353722/expo.svg",
    titulo: "Expo",
    descricao:
      "O Expo é uma ferramenta poderosa que simplifica o desenvolvimento de aplicativos mobile e web. Com ele, você pode criar apps para iOS, Android e até mesmo para a web utilizando uma única base de código em JavaScript ou TypeScript.",
  },
];

function mostrarDescricao(id: string) {
  const titulo = document.querySelector("#tituloConhecimento");
  const descricao = document.querySelector("#descricaoConhecimento");

  titulo!.textContent = skills[Number(id)].titulo;
  descricao!.textContent = skills[Number(id)].descricao;
}

export function Conhecimentos() {
  return (
    <section className="conhecimentos" id="tecs">
      <h1 className="titulo titulo-skills destaquePrimeiraLetra">
        Linguagens e ferramentas
      </h1>
      <section className="blocoSessoes">
        <div className="conhecimentosImgBloco">
          {skills.map((skill) => {
            const id = skill.id;
            return (
              <img
                key={skill.id}
                src={skill.img}
                alt={skill.titulo}
                onClick={() => mostrarDescricao(id)}
                className="conhecimentoImg"
              />
            );
          })}
        </div>
        <div
          className="blocoDescricaoConhecimento"
          id="blocoDescricaoConhecimento"
        >
          <h3
            className="titulo textoDestaque textoNegrito"
            id="tituloConhecimento"
          >
            Clique em uma skill
          </h3>
          <p className="descricaoConhecimento" id="descricaoConhecimento"></p>
          <p
            className="descricaoConhecimento subtitulo textoNegrito"
            id="domConhecimento"
          ></p>
        </div>
      </section>
    </section>
  );
}

// ----------------------------------

export const resumo = [
    {
        id: 0,
        topText:" Olá, eu sou...",
        title: "Leonardo Campos",
        subtitle:"Desenvolvedor Front End",
        mainText: "Estou em transição de carreira para a área de desenvolvimento de software. No momento, atuo como freelancer criando projetos para praticar e aprimorar meus conhecimentos, mas disposto a entrar para um time de tecnologia.", 
        color:"#06c6e7"
    },
]

// ----------------------------------

export const linguagens = [
    {
        id: 0,
        title: "JavaScript",
        mainText: "JavaScript é uma linguagem de programação utilizada para criar interatividade em páginas web e aplicativos. Ela permite a criação de animações, jogos e formulários interativos, entre outros recursos dinâmicos. É versátil e pode ser utilizado tanto no lado do cliente quanto do servidor.", 
        color:"#dfb600"
    },
    {
        id: 1,
        title: "React JS",
        mainText: "React é uma biblioteca JavaScript para criação de interfaces de usuário declarativas e componentizadas, com alto desempenho e escalabilidade. Foi criada pelo Facebook, é amplamente utilizada em aplicações web e móveis, e utiliza o conceito de Virtual DOM para melhorar a performance das aplicações.",
        color: "#2f9afd"
    },
    {
        id: 2,
        title: "TypeScript",
        mainText: "TypeScript é uma linguagem de programação que estende o JavaScript, adicionando recursos de tipagem estática e suporte a recursos adicionais como classes, interfaces e enums. Esses recursos tornam mais fácil identificar erros no código durante a fase de desenvolvimento e ajudam a criar aplicativos escaláveis e robustos.",
        color: "#1e62f5"
    },
    {
        id: 3,
        title: "HTML",
        mainText: "HTML é uma linguagem de marcação utilizada para estruturar e exibir conteúdo na web, usando uma sintaxe baseada em tags para identificar elementos como cabeçalhos, parágrafos, imagens, links e formulários. Ele é interpretado pelos navegadores da web e é fundamental para a construção de sites e aplicativos da web",
        color: "#f5621e"
    },
    {
        id: 4,
        title: "CSS",
        mainText: "CSS é uma linguagem de estilo que permite controlar a aparência e o layout do conteúdo em uma página web. Com ele, é possível aplicar estilos a elementos HTML, criar designs mais flexíveis e adaptáveis, melhorar a manutenção e reutilização de código e criar experiências interativas e visualmente atraentes na web.",
        color: "#1256e9"
    },
    {
        id: 5,
        title: "Node.JS",
        mainText: "Node.js é uma plataforma de desenvolvimento de software que executa código JavaScript fora do navegador, sendo altamente eficiente e escalável para aplicativos de rede em tempo real. Ele ja possui um grande ecossistema de módulos e pacotes disponíveis para facilitar o desenvolvimento de aplicativos",
        color: "#90df29"
    },
]

// ----------------------------------

import { iconTec } from "./images"

export const projetos = [
    {
        id: 0,
        nameImage: iconTec.css,
        title: "Portfolio",
        tecnologies:[iconTec.ts, iconTec.react, iconTec.html, iconTec.css, iconTec.styled ],
        linkProject: "./", 
        linkGitHub:"https://github.com/CamposLeo95/Todo-React-Ts",
        description: "Este é o meu portfólio pessoal, criado para mostrar mais sobre mim e as tecnologias em que trabalho atualmente. Aqui você encontrará informações detalhadas sobre minha experiência e habilidades, com o objetivo de demonstrar como posso agregar valor a um projeto ou empresa.",
    },
    
    {
        id: 1,
        nameImage: iconTec.css,
        title: "Todo List",
        tecnologies:[iconTec.ts, iconTec.react, iconTec.html, iconTec.css, ],
        linkProject: "https://todo-react-ts-ivory.vercel.app/", 
        linkGitHub:"https://github.com/CamposLeo95/Todo-React-Ts",
        description: "Desenvolvi este aplicativo TodoList com a orientação de Matheus Battisti, do Hora de Codar, para aprimorar meus conhecimentos em TypeScript e React. O projeto consiste em uma lista de tarefas em que é possível registrar, editar e excluir tarefas conforme necessário. ",
    },

    {
        id: 2,
        title: "Jogo da velha",
        nameImage: iconTec.css,
        tecnologies:[iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://camposleo95.github.io/Jogo-da-Velha/", 
        linkGitHub:"https://github.com/CamposLeo95/Jogo-da-Velha",
        description: "Projeto criado para simular um jogo da velha, construido logo quando comecei o curso ProgramadorBR utilizei tecnologias mais basicas como JavaScript para introduzir a logica do jogo",
    },

    {
        id: 3,
        title: "Previsão do tempo",
        nameImage: iconTec.js,
        tecnologies:[iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://camposleo95.github.io/Projeto-previsao-tempo/", 
        linkGitHub:"https://github.com/CamposLeo95/Projeto-previsao-tempo",
        description: "Este projeto consiste em uma aplicação que consome uma API de previsão do tempo para apresentar informações atualizadas sobre as condições climáticas. A construção da aplicação foi baseada em um curso intensivo sob a orientação do Rodolfo Mori, do DevClub. ",
    },

    {
        id: 4,
        title: "Churrascometro",
        nameImage: iconTec.js,
        tecnologies:[iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://camposleo95.github.io/Projeto-Churrascometro/", 
        linkGitHub:"https://github.com/CamposLeo95/Projeto-Churrascometro",
        description: "Durante meus primeiros estudos em desenvolvimento web no curso ProgramadorBR, criei um projeto simples que consiste em simular a quantidade de itens necessários para realizar um churrasco, com base no número de pessoas e tempo de duração do evento.",
    },
]
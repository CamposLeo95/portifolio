// ----------------------------------

export const resumo = [
    {
        id: 0,
        topText:" Olá, eu sou...",
        title: "Leonardo Campos",
        subtitle:"Front End Developer",
        mainText: "Estou em transição de carreira para a area de desenvolvimento de software, atualmente estou como freelance construindo projetos de forma autonoma. ", 
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
        title: "Portifolio",
        tecnologies:[iconTec.ts, iconTec.react, iconTec.html, iconTec.css, iconTec.styled ],
        linkProject: "./", 
        linkGitHub:"https://github.com/CamposLeo95/Todo-React-Ts",
        description: "Este projeto é o portifolio que crei para mostra um pouco mais sobre mim e apresentar as tecnologias que trabalho no momento.",
    },
    
    {
        id: 1,
        nameImage: iconTec.css,
        title: "Todo List",
        tecnologies:[iconTec.ts, iconTec.react, iconTec.html, iconTec.css, ],
        linkProject: "https://todo-react-ts-ivory.vercel.app/", 
        linkGitHub:"https://github.com/CamposLeo95/Todo-React-Ts",
        description: "Criei este TodoList com orientação de Matheus Battisti do Hora de Codar para estudar o uso da tecnologia TypeScript junto ao React, o projeto apresenta uma lista de tarefa em que é possivel registrarmos, editarmos e apagarmos tarefas",
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
        description: "Projeto em que faço o consumo de uma API que devolve dados de previsão do tempo, a construção dele foi baseada em uma semana intensiva no DevClub com o Rodolfo Mori ",
    },

    {
        id: 4,
        title: "Churrascometro",
        nameImage: iconTec.js,
        tecnologies:[iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://camposleo95.github.io/Projeto-Churrascometro/", 
        linkGitHub:"https://github.com/CamposLeo95/Projeto-Churrascometro",
        description: "Este é um projeto simples que fiz logo no começo quando estava começando a estudar desenvolvimento web no curso ProgramadorBR, ele simula a quantidade necessaria de itens para que seja feito um churrasco, baseado na quantidade de pessoas e horas.",
    },
]
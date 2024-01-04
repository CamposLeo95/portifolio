// ----------------------------------


// ----------------------------------

import { iconTec } from "./images"

import churras from "../img/churrascometro.png"
import previsao from "../img/previsao.png"
import velha from "../img/velha.png"
import todo from "../img/todo.png"
import poke from "../img/poke.png"
import port from "../img/port.png"

export const projetos = [


    {
        id: 0,
        title: "Churrascometro",
        image: churras,
        tecnologies: [iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://camposleo95.github.io/Projeto-Churrascometro/",
        linkGitHub: "https://github.com/CamposLeo95/Projeto-Churrascometro",
        description: "Projeto simples que consiste em simular a quantidade de itens necessários para realizar um churrasco, com base no número de pessoas e tempo de duração do evento. Feito para treinar logica de programação",
    },
    {
        id: 1,
        title: "Previsão do tempo",
        image: previsao,
        tecnologies: [iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://camposleo95.github.io/Projeto-previsao-tempo/",
        linkGitHub: "https://github.com/CamposLeo95/Projeto-previsao-tempo",
        description: "Projeto criado para consumo de uma API de previsão do tempo utilizando fetch para fazer a requisição com o Back-End ",
    },
    {
        id: 2,
        title: "Jogo da velha",
        image: velha,
        tecnologies: [iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://camposleo95.github.io/Jogo-da-Velha/",
        linkGitHub: "https://github.com/CamposLeo95/Jogo-da-Velha",
        description: "Jogo da Velha construido utilizando as tecnologias basicas HTML, CSS e JavaScript. Projeto criado para pratica de logica de programação basica",
    },
    {
        id: 3,
        image: todo,
        title: "Todo List",
        tecnologies: [iconTec.ts, iconTec.react, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://todo-react-ts-ivory.vercel.app/",
        linkGitHub: "https://github.com/CamposLeo95/Todo-React-Ts",
        description: "Projeto TodoList, feito com a orientação de Matheus Battisti, do Hora de Codar, utilizando TypeScript e React. O projeto consiste em uma lista de tarefas em que é possível registrar, editar e excluir tarefas conforme necessário. ",
    },

    {
        id: 4,
        image: poke,
        title: "Pokedex",
        tecnologies: [iconTec.react, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://projeto-pokedex-sand.vercel.app/",
        linkGitHub: "https://github.com/CamposLeo95/projeto_pokedex",
        description: "Aplicação desenvolvida em React, consumindo a API da PokeAPI com o Axios para obter os dados dos através de requisições GET e exibi-los na página inicial. Com redirecionamento de rotas feito em react-router-dom",
    },
    {
        id: 5,
        image: port,
        title: "Portfolio",
        tecnologies: [iconTec.ts, iconTec.react, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "./",
        linkGitHub: "https://github.com/CamposLeo95/Portifolio",
        description: "Portfólio criado utilizando React, TypeScript e Styled-Components para demonstrar meu perfil e apresentar as tecnologias e projetos feitos.",
    }

]
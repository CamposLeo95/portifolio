// ----------------------------------


// ----------------------------------

import { iconTec } from "./images"

import churras from "../img/churrascometro.png"

import previsao from "../img/previsao.png"

import velha from "../img/velha.png"

import todo from "../img/todo.png"

import poke from "../img/poke.png"

import port from "../img/portfolio.png"

import car_redux from "../img/carrinho_redux.png"

import social from "../img/frontPoste1.png"

import playstation from "../img/playstation.png"

// videos ___________________________

import rede_social_video from "../videos/rede_social.webm"
import todo_video from "../videos/todo.webm"
import redux_video from "../videos/redux.webm"
import pokemon_video from "../videos/pokemon.webm"
import velha_video from "../videos/velha.webm"
import previsao_video from "../videos/previsao.webm"
import churrasco_video from "../videos/churrasco.webm"
import playstation_video from "../videos/playstation.webm"


export const projetos = [

    {
        id: 0,
        title: "Churrascometro",
        image: [churras],
        tecnologies: [iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://projeto-churrascometro-delta.vercel.app/",
        linkGitHub: "https://github.com/CamposLeo95/Projeto-Churrascometro",
        description: "Projeto simples que consiste em simular a quantidade de itens necessários para realizar um churrasco, com base no número de pessoas e tempo de duração do evento. Feito para treinar logica de programação",
        video: churrasco_video
    },
    {
        id: 1,
        title: "Previsão do tempo",
        image: [previsao],
        tecnologies: [iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://projeto-previsao-tempo-dxpslwk1s-camposleo95.vercel.app/",
        linkGitHub: "https://github.com/CamposLeo95/Projeto-previsao-tempo",
        description: "Projeto criado para consumo de uma API de previsão do tempo utilizando fetch para fazer a requisição com o Back-End ",
        video: previsao_video
    },
    {
        id: 2,
        title: "Jogo da velha",
        image: [velha],
        tecnologies: [iconTec.js, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://camposleo95.github.io/Jogo-da-Velha/",
        linkGitHub: "https://github.com/CamposLeo95/Jogo-da-Velha",
        description: "Jogo da Velha construido utilizando as tecnologias basicas HTML, CSS e JavaScript. Projeto criado para pratica de logica de programação basica",
        video: velha_video,
    },
    {
        id: 3,
        image: [todo],
        title: "Todo List",
        tecnologies: [iconTec.ts, iconTec.react, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://todo-react-ts-ivory.vercel.app/",
        linkGitHub: "https://github.com/CamposLeo95/Todo-React-Ts",
        description: "Projeto TodoList, feito com a orientação de Matheus Battisti, do Hora de Codar, utilizando TypeScript e React. O projeto consiste em uma lista de tarefas em que é possível registrar, editar e excluir tarefas conforme necessário. ",
        video: todo_video
    },

    {
        id: 4,
        image: [poke],
        title: "Pokedex",
        tecnologies: [iconTec.react, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "https://projeto-pokedex-sand.vercel.app/",
        linkGitHub: "https://github.com/CamposLeo95/projeto_pokedex",
        description: "Aplicação desenvolvida em React, consumindo a API da PokeAPI com o Axios para obter os dados dos através de requisições GET e exibi-los na página inicial. Com redirecionamento de rotas feito em react-router-dom",
        video: pokemon_video
    },
    {
        id: 5,
        image: [port],
        title: "Portfolio",
        tecnologies: [iconTec.ts, iconTec.react, iconTec.html, iconTec.css, iconTec.git],
        linkProject: "./",
        linkGitHub: "https://github.com/CamposLeo95/Portifolio",
        description: "Portifolio criado em React para poder falar mais sobre meu trabalho, quais ferramentas eu utilizo, ter informações de contatos expondo minhas redes socias como GitHub e linkedin, emails e whatsApp e para falar um pouco mais sobre mim.",
        challenge: [
            "Montar a arquitetura do projeto para que tivesse um desempenho melhor com maior agilidade e organização",
            "Utilização da biblioteca styled components para montar a estilização e logica do projeto",
            "Utilizar o Swiper para montar os carroseis",
            "Utilização do ContextApi para poder passar estados globais entre componentes e melhorar a passagem de propriedades",
            "A contrução de um banco de Dados fictício para armazenar toda a informação",
            "A utilização do EmailJs para receber contatos de pessoas que queiram meus serviços"
        ]
    },
    {
        id: 6,
        image: [car_redux],
        title: "Carrinho - Redux",
        tecnologies: [iconTec.ts, iconTec.react, iconTec.tailwind, iconTec.redux],
        linkGitHub: "https://github.com/CamposLeo95/projeto_redux_toolkit",
        description: "Este é um projeto para aprender a utilizar o Redux toolkit, fazendo a simulação de um carrinho de compras em que foi preciso fazer as alterações de estado de forma global para poder atualizar varios componentes ao mesmo tempo.",
        challenge: [
            "O primeiro desafio foi entender os principios do Redux e o modo como funciona.",
            "Como implementa-lo nos componentes quais iriam usuar os estados e quais iriam altera-los fazendo com que pudessem ser manipulados de quaisquer componentes envolvidos no provider.",
            "Qual a melhor forma de arquitetar e dividir as funcionalidades implementando o principio de dividir tarefas",
        ],
        video: redux_video
    },

    {
        id: 7,
        image: [playstation],
        title: "Projeto Rede Social",
        tecnologies: [iconTec.ts, iconTec.angular, iconTec.html, iconTec.css],
        linkProject: "https://plystationstoreclone.netlify.app/",
        linkGitHub: "https://github.com/CamposLeo95/projeto_playstation_store_angular",
        description: "Clone da playstation store para aplicar os conhecimentos de Angular dos cursos que estou realizando. Aplicando conceitos de diretivas | Arquitetura de pastas | aplicação do Angular CLI | Componentização | deploy do projeto",
        video: playstation_video
    },

    {
        id: 8,
        image: [social],
        title: "Projeto Rede Social",
        tecnologies: [iconTec.ts, iconTec.react, iconTec.tailwind, iconTec.node, iconTec.postgres],
        linkProject: "https://projeto-front-post.vercel.app/",
        linkGitHub: "https://github.com/CamposLeo95/projeto_front_post",
        description: "Projeto baseado em uma rede social utilizando React, Tailwind, Node e banco de dados PostgreSQLcom o objetivo de implementar um sistema de postagens semelhante ao Twitter. O projeto permite a criação de usuários com permissões, possibilitando que eles façam postagens.",
        challenge: [

            'IMPORTANTE! - PARA EXECUTAR ESSE PROJETO É NECESSARIO EXECUTAR O PROJETO - POST-BACKEND',

            "Utilizar o tailwind, fiz o uso dessa lib para a estilização do projeto.",

            "React-router-dom para a manipulação das rotas variando entre a rota de login em que o usuario irá se cadastrar ou logar e a de users que será apresentado os postes e todas as permissões e dados dos usuarios",

            "Uso do axios, me ajudou com as configurações das requisições permitindo inserir uma rota padrão de requisição, a inserção do token recuperado do backend nos headers para conseguir acessar as rotas de postes e a manipulação de requisições em geral para acesso aos dados da API",

            "Uso do context API para poder manipular o estado global do modal. criando uma forma de abrir e fecha-lo e tambem manipular o componente que apareceria dentro desto, para o caso de editar o poste, criar um poste ou editar um usuario.",

            "O primeiro desafio foi o ponto para fazer a conexão com o banco de dados e poder unir o banco de users com o de postes e para isso utilizei o prisma, um ORM que facilita a interação com bancos de dados.",

            'Outro desafio foi a autenticação de usuarios para permitir somente tivessem acesso a rota de postes usuarios que possuissem um token e para isso utilizei JWT que permite a manipulação de tokens de uma forma mais pratica.',

            'Mais um ponto foi trabalhar com Orientação a objetos visto que é uma dos modos de trabalhar mais utilizados no mercado optei por implementa-lo no projeto e poder aprender um pouco mais.'

        ],
        video: rede_social_video
    },


].reverse()
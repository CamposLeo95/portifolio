// Styles
import { SecondContainer } from "./styles"

import { RiComputerLine, RiDatabase2Line, RiFileSettingsLine } from "react-icons/ri"

import { iconTecArray } from "../../../assets/Data/images";

import SliderImg from "../../SliderImg";
import CardSkill from "../../CardSkill";

export default function Skills() {
    const skills = [
        {
            icon: <RiComputerLine />,
            title: "Landing Pages",
            content: "Criação de landing pages responsivas utilizando ferramentas que tragam uma melhor experiência para o usuário e mais engajamento."
        },
        {
            icon: <RiFileSettingsLine />,
            title: "Aplicações Web",
            content: "Crio sistemas Web que tornam a vida do usuário mais fácil utilizando as principais ferramentas do mercado. Com o objetivo de entregar soluções que tenham desde simples funcionalidades, até sistemas mais complexos e robustos"
        },
        {
            icon: <RiDatabase2Line />,
            title: "Back End",
            content: "Desenvolvimento de um sistema backend que entregue rotas funcionais a uma aplicação utilizando NodeJS, Banco de Dados SQL e noSQL"
        },
    ]

    return (
        <>
            <SecondContainer>
                <div className='texto-principal'>
                    <h2>
                        <span className="span-about-one">Meus, </span>
                        <span className="span-about-two">Serviços</span>
                    </h2>
                    <p>
                        Hoje conto com um bom conhecimento em um conjunto de ferramentas que são muito utilizadas no mercado e isso me permite desenvolver soluções de uma forma mais ágil, aqui estão alguns dos meus serviços.
                    </p>
                </div>
                <div className="container-card-skill">
                    {skills.map((skill) => (
                        <CardSkill icon={skill.icon} title={skill.title} content={skill.content} />
                    ))}
                </div>
            </SecondContainer>
            <SliderImg iconTecArray={iconTecArray} />
        </>
    );
};
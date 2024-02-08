// Styles
import { SecondContainer } from "./styles"

import { RiComputerLine, RiDatabase2Line, RiFileSettingsLine } from "react-icons/ri"

import { iconTecArray } from "../../assets/Data/images";

import SliderImg from "../../components/SliderImg";
import CardSkill from "../../components/CardSkill";

export default function Skills() {

    return (
        <>
            <SecondContainer>
                <div className='texto-principal'>
                    <h2>
                        <span className="span-about-one">Tenologias</span>
                        {/* <span className="span-about-two">que Domino</span> */}
                    </h2>
                    <p>
                        Hoje possuo maior domínio em tecnologias Frot-end com HTML, CSS, JavaScript, React e Angular. Entretanto já trabalhei com soluções Full Stack, onde tive a oportunidade de desenvolver APIs usando ferramentas Back-end como Node, Postgres, MongoDB e Docker e aprendendo conceitos importantes de desenvolvimento como POO. Além de por curiosidade ter mexido um pouco com aplicações Mobile em que pude utilizar o React Native.
                    </p>
                </div>
            </SecondContainer>
            <SliderImg iconTecArray={iconTecArray} />
        </>
    );
};
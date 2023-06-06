// Styles
import { SecondContainer } from "./styles"

import { RiComputerLine } from "react-icons/ri"

import { iconTecArray } from "../../../assets/Data/images";

import SliderImg from "../../SliderImg";
import CardSkill from "../../CardSkill";

export default function Skills(){
    const skills = [
        {
            icon: <RiComputerLine/>,
            title: "Landing Pages",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam provident veniam esse a neque velit temporibus maiores, molestiae asperiores. Maiores architecto cum deserunt esse enim officiis dicta labore cumque sed?"
        },
        {
            icon: <RiComputerLine/>,
            title: "Aplicações Web",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam provident veniam esse a neque velit temporibus maiores, molestiae asperiores. Maiores architecto cum deserunt esse enim officiis dicta labore cumque sed?"
        },
        {
            icon: <RiComputerLine/>,
            title: "Back End",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam provident veniam esse a neque velit temporibus maiores, molestiae asperiores. Maiores architecto cum deserunt esse enim officiis dicta labore cumque sed?"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus iste neque excepturi velit beatae suscipit sapiente, debitis inventore nisi sed aliquid modi magnam qui repudiandae doloribus rem optio amet!
            </p>
        </div>
        <div className="container-card-skill">
            {skills.map((skill) => (
                <CardSkill icon={skill.icon} title={skill.title} content={skill.content} />
            ))}         
        </div> 
    </SecondContainer>
    <SliderImg iconTecArray={iconTecArray}/>
</>
  );
};
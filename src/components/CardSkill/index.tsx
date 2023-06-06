import { SecondContainer } from "./styles"


interface CardSkillProps{
  icon: JSX.Element,
  title: string,
  content: string
}

function CardSkill({icon, title, content}:CardSkillProps) {
  return (
    <SecondContainer>
      <div className="card-skill">
          <h2>{icon}</h2>
          <h3>{title}</h3>
          <p>{content}</p> 
      </div>      
    </SecondContainer>
  )
}

export default CardSkill

import { useEffect, useState } from "react";
import * as S from "./styles"
import { useInView } from 'react-intersection-observer';

interface CardSkillProps {
  icon: JSX.Element,
  title: string,
  content: string,
  delay: number
}

function CardSkill({ icon, title, content, delay = 0.1 }: CardSkillProps) {

  const [show, setShow] = useState(false)


  const { ref, inView } = useInView();

  const handleShow = () => {
    inView && setShow(true)
  }

  useEffect(() => {
    handleShow()
  }, [inView])


  return (
    <S.CardSkill ref={ref} delay={delay} inView={show}>
      <h2>{icon}</h2>
      <h3>{title}</h3>
      <p>{content}</p>
    </S.CardSkill>
  )
}

export default CardSkill

import { CardImagem } from "./styles"

interface CardImgProps{
    img: string
}

export default function CardImg({img}:CardImgProps) {
  return (
    <CardImagem>
        <img src={img} alt="" />
    </CardImagem>
  )
}



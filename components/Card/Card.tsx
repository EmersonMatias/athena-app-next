import Image, { StaticImageData } from "next/image"
import styles from "./styles.module.css"
import Container from "../Container"

export default function Card({ img, title, content }: Card) {

  return (
    <div className={`min-w-[350px] max-w-[350px] ${styles.card} ${styles.backgroundGradient} flex flex-col items-center`}>
      <Image
        src={img}
        alt="Icone E-commerce"
        className="mb-2"
        height={60}
      />

      <h6 className="font-semibold text-lg mb-5">{title}</h6>
      <Container className="h-[160px] flex mb-3">
        <p className="text-center font-light">{content}</p>
      </Container>


      <button className="px-8 py-3 rounded-lg bg-[#E54C4C] font-medium">Solicitar Orçamento {'>'}</button>
    </div>
  )
}


interface Card {
  readonly img: StaticImageData,
  readonly title: string,
  readonly content: string,
}
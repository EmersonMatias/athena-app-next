import { cinzel } from "@/settings/fonts";
import styles from "./styles.module.css"
import Image from "next/image";
import AthenaImg from '@/public/img/Athena IMG.png'
import Card from "@/components/Card/Card";
import { CardContent, CardContent2 } from "@/constants/constants";
import Card2 from "@/components/Card-2";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import HTML from '@/public/svg/Html-BW.svg'
import Figma from '@/public/svg/Figma.svg'

export default function Home() {
  return (
    <main className="bg-black-custom flex flex-col text-white px-10  pb-40 xl:px-20 2xl:px-40 ">

      <section className="flex flex-col mb-60">

        <Container className="z-10 mt-[6%] mb-20">
          <h5 className="font-semibold text-2xl mb-10 max-[768px]:text-xl">VOCÊ ESTÁ PRONTO PARA ESTAR NO TOPO?</h5>
          <h1 className={`text-8xl ${cinzel.className} font-bold mb-5 max-[768px]:text-6xl max-[1280px]:text-7xl`}>REVOLUCIONE</h1>
          <h1 className={`text-7xl ${cinzel.className} font-bold mb-8 max-[768px]:text-5xl max-[1280px]:text-6xl`}>SUA PRESENÇA DIGITAL</h1>
          <h6 className="text-xl max-[768px]:text-lg">SE POSICIONE NO MERCADO COM UM VISUAL ATRATIVO E <span className="text-red-500 font-semibold">DOMINE O JOGO!</span></h6>
        </Container>

        <Container className="z-10">
          <h1 className={`text-8xl ${cinzel.className} ${styles.gradient45deg} w-fit max-[768px]:text-6xl max-[1280px]:text-7xl`}>athena</h1>
          <h4 className='text-4xl font-thin mb-10 max-[768px]:text-2xl max-[1280px]:text-3xl'>SITES • SISTEMAS • MARKETING DIGITAL</h4>

          <div className={`h-[5px] w-[80%] ${styles.gradient}`} />
        </Container>

        <Container className={`absolute right-10 bottom-0 ${styles.gradients} max-[900px]:right-0   max-[1280px]:bottom-[0px]`}>
          <Image
            src={AthenaImg}
            alt="Imagem de Athena"

          />
        </Container>

      </section>

      <section className="flex flex-col mb-40">
        <h2 className={`text-5xl ${cinzel.className} text-center mb-20 max-[1024px]:text-4xl`}>veja como podemos te ajudar</h2>

        <Container className=" grid grid-cols-3 gap-10 mx-auto mb-20 max-[1024px]:grid-cols-1 max-[1280px]:grid-cols-2"> 
          {CardContent.map((card) => {
            return <Card key={card.title} img={card.image} title={card.title} content={card.content} />
          })}
        </Container>

        <h5 className="font-bold text-xl text-center">E muito mais... Independente do tipo do seu negócio, nós temos a solução!</h5>
      </section>
 
      <section className="flex flex-col mb-40">
        <h2 className={`text-5xl ${cinzel.className} mb-20 max-w-[600px] leading-tight max-[1024px]:text-4xl`}>
          por que a <span className={`${styles.gradient45deg}`}>athena</span> é a opção certa para você?
        </h2>

        <Container className="flex flex-col">
          {CardContent2.map(({ title, number, content }) => {
            return <Card2 key={number} title={title} number={number} content={content} />
          })}
        </Container>
      </section>

      <section className="flex flex-col mb-40">
        <Container className='flex justify-center items-center gap-20 mb-20 max-[800px]:flex-col max-[800px]:gap-5 max-[800px]:mb-10'>
          <h2 className={`text-5xl ${cinzel.className} leading-tight font-semibold max-[800px]:mb-0 max-[1024px]:text-4xl `}>
            tecnologias usadas
          </h2>
          <h6 className='w-[640px]  text-xl font-light max-[800px]:text-center max-[800px]:w-fit'>
            A inocação é algo que nos inspira. Por isso estamos sempre buscando as mais novas tecnologias.
            Conheça as tecnologias mais modernas que utilizamos para desenvolver nossos projetos
          </h6>
        </Container>



        <Container >
          <Divider className="bg-white mb-10" />

          <Container className="flex items-center">
            <h4 className="font-medium text-2xl mr-40">DESIGN</h4>

            <Container className="flex gap-20">
              <Container className="flex gap-4 items-center">
                <Image
                  src={HTML}
                  alt='HTML'
                />
                <p className="text-xl font-light">HTML5</p>
              </Container>

              <Container className="flex gap-4 items-center">
                <Image
                  src={Figma}
                  alt='HTML'
                />
                <p className="text-xl font-light">HTML5</p>
              </Container>
            </Container>



          </Container>



          <Divider className="bg-white mt-10" />
        </Container>



      </section>

    </main>
  )
}

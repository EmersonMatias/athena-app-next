import Image from "next/image";
import Logo from '@/public/svg/Logo.svg'
import Instagram from '@/public/svg/Instagram.svg'
import Whatsapp from '@/public/svg/Whatsapp.svg'
import Container from "./Container";

export default function Header() {
    return (
        <header className="top-0 w-full bg-black-custom text-white flex justify-between px-10  z-50 xl:px-40 py-7">
            <Container className="flex items-center">
                <Image
                    src={Logo}
                    width={80}
                    alt="Logo Athena"
                />

                <Container className="flex gap-10 text-xl ml-10 z-10">
                    <p className="font-bold">Inicio</p>
                    <p className="font-bold">Cases</p>
                    <p className="font-bold">Contato</p>
                </Container>
            </Container>

            <Container className="flex gap-5 z-10">

                <Image
                    src={Instagram}
                    alt='Whatsapp'
                    width={50}
                />

                <Image
                    src={Whatsapp}
                    alt='Whatsapp'
                    width={50}
                />
            </Container>
        </header>
    )
}
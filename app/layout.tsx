import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/settings/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Athena - Softwares & Marketing Digital",
  description: "Athena | Sites ● Sistemas ● Marketing Digital Oferecemos uma combinação perfeita de criação de sites e estratégias de marketing digital. Unimos o melhor dos dois mundos, proporcionando sites altamente performáticos e estratégias de marketing digital eficazes. Não só montamos o seu site de forma otimizada, mas também configuramos o seu Google Meu Negócio para máxima visibilidade online. Além disso, gerenciamos o tráfego pago da sua loja, proporcionando uma abordagem abrangente. Do design à entrega, garantimos um serviço personalizado que reflete a identidade única da sua marca. Simplifique sua presença digital conosco e destaque-se da concorrência. Contate-nos hoje mesmo para impulsionar seu negócio para o próximo nível!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

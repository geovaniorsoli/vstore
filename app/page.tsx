"use client"

import NavigationBar from "@/components/nav-bar";
import Background from "@/components/background";
import sty from "../styles/home.module.css";
import { Card, CardHeader, CardBody, CardFooter, Link, Button, Accordion, AccordionItem } from "@nextui-org/react";
import * as lucide from "lucide-react";
import Footer from "../components/footer"

const cardItems = [
  { title: "DUOBOOST", body: "Você irá jogar duo com um jogador profissional até o elo desejado.", url: "/duoboost" },
  { title: "ELOJOB", body: "Um jogador profissional irá garantir o elo desejado jogando em sua conta.", url: "/elojob" },
  { title: "VITÓRIAS", body: "Escolha quantas vitórias deseja em sua conta.", url: "/vitorias" },
  { title: "COACH", body: "Melhore sua gameplay através de aulas práticas com professores.", url: "/" }
];

const textFirstItems = [
  { title: "SEGURANÇA", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati molestias sit, recusandae ipsam delectus cupiditate quia laboriosam itaque illo asperiores ab inventore dolorem optio maiores perferendis maxime. Nostrum, dolor.", icon: lucide.Lock },
  { title: "CONFIABILIDADE", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati molestias sit, recusandae ipsam delectus cupiditate quia laboriosam itaque illo asperiores ab inventore dolorem optio maiores perferendis maxime. Nostrum, dolor.", icon: lucide.HeartHandshake },
];
const textSecondItems = [
  { title: "ENTREGA GARANTIDA", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati molestias sit, recusandae ipsam delectus cupiditate quia laboriosam itaque illo asperiores ab inventore dolorem optio maiores perferendis maxime. Nostrum, dolor.", icon: lucide.Check },
  { title: "SUPORTE", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati molestias sit, recusandae ipsam delectus cupiditate quia laboriosam itaque illo asperiores ab inventore dolorem optio maiores perferendis maxime. Nostrum, dolor.", icon: lucide.UserRound },
];

const faq = [
  { title: "COMO FUNCIONA?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
  { title: "EXISTE CHANCE DE SUSPENSÃO ADQUIRINDO UM DOS SERVIÇOS?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
  { title: "COMO FUNCIONA O PAGAMENTO?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
  { title: "O QUE ACONTECE SE PASSAR DO PRAZO DE ENTREGA COMBINADO?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
  { title: "COMO SEI QUE MINHA CONTA NÃO SERÁ ROUBADA?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
  { title: "QUEM FICARÁ SABENDO QUE EU COMPREI O SERVIÇO?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
]
export default function Home() {
  return (
    <>
      <NavigationBar />

      <div className={sty.containerMain}>
        <h2 className={sty.secondaryTitle}>
          NÓS TE AJUDAMOS A <span className={sty.span}> CONQUISTAR O RANK </span>
        </h2>
        <h1 className={sty.primaryTitle}>
          QUE VOCÊ <span className={sty.span}> MERECE! </span>
        </h1>
        <Button as={Link} href="#service" size="lg" color="primary"> NOSSOS SERVIÇOS </Button>
      </div>

      <img className={sty.imgVandal} alt="vandal" src="/vandal.webp" width={300} height={300} />

      <Background />
      <div id="service">
        <div className={sty.containerCenter}>
          <h1 className={sty.title}> CONHEÇA MAIS SOBRE NOSSO SERVIÇOS </h1>
        </div>
        <div className={sty.cardContainer}>
          {cardItems.map((item, index) => (
            <Link href={item.url}> 
            <Card key={index} isPressable className={sty.card}>
              <CardHeader className={sty.headerCard}>
                <div className={sty.bodyCard}>
                  <h1>{item.title}</h1>
                </div>
              </CardHeader>
              <CardBody>
                <p>{item.body}</p>
              </CardBody>
              <CardFooter>
                <Link href={item.url} className={sty.cardLink} size="lg"> ADQUIRIR <lucide.MoveRight /> </Link>
              </CardFooter>
            </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className={sty.containerCenter}>

        <h1 className={sty.title}> VANTAGENS DE NOSSO SERVIÇO </h1>
      </div>
      <img className={sty.background} alt="background" src="/background.png" width={1920} height={1080} />

      <div className={sty.containerCenterText}>

        {textFirstItems.map((item, index) => (
          <div key={index} className={sty.item}>
            <item.icon />
            <h2 className={sty.Subtitle}>{item.title}</h2>
            <h3 className={sty.Content}>{item.content}</h3>
          </div>
        ))}
      </div>

      <div className={sty.containerCenterText}>
        {textSecondItems.map((item, index) => (
          <div key={index} className={sty.item}>
            <item.icon />
            <h2 className={sty.Subtitle}>{item.title}</h2>
            <h3 className={sty.Content}>{item.content}</h3>
          </div>
        ))}
      </div>

      <div className={sty.containerCenter}>
        <h1 className={sty.title}> ESCOLHA SEU SERVIÇO FAVORITO </h1>

        <div className={sty.imageContainer}>
          <ul className={sty.serviceList}>
            <li>
              <h2 className={sty.serviceTitle}>1. Selecione seu produto</h2>
              <p className={sty.serviceDescription}>Temos várias opções para atingir seus objetivos. Selecione a que melhor se adapta a você.</p>
            </li>
            <li>
              <h2 className={sty.serviceTitle}>2. Personalize</h2>
              <p className={sty.serviceDescription}>Escolha os detalhes do seu pedido e clique em "comprar". Isso o levará para o WhatsApp.</p>
            </li>
            <li>
              <h2 className={sty.serviceTitle}>3. Gerencie</h2>
              <p className={sty.serviceDescription}>Sucesso! Agora, gerencie seu pedido através do nosso chat no WhatsApp.</p>
            </li>
          </ul>

          <img className={sty.imgJett} alt="jett" src="/JETT.webp" width={500} height={500} />
        </div>

      </div>

      <div className={sty.containerCenter}>
        <h1 className={sty.title}> FAQ  </h1>
      </div>

      <div className={sty.AccordionContainer}>
        <Accordion>
          {faq.map((faq, index) => (
            <AccordionItem className={sty.Accordion} key={index} aria-label={faq.title} title={faq.title}>
              {faq.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    <Footer/>
    </>
  );
}


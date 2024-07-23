"use client"

import NavigationBar from "@/components/nav-bar"
import Background from "@/components/background"
import sty from "../styles/home.module.css"
import { Card, CardHeader, CardBody, CardFooter, Link, Button, Accordion, AccordionItem, Tooltip } from "@nextui-org/react"
import * as lucide from "lucide-react"
import Footer from "../components/footer"
import { faDiscord, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WhatsappButton from "@/components/Whastapp"

const iconsMedia = [
  { name: "Discord", icon: faDiscord, href: "https://discord.com/invite/SeAWSBVXhE" },
  { name: "Instagram", icon: faInstagram, href: "https://www.instagram.com/vstorefn/" },
  { name: "Tiktok", icon: faTiktok, href: "http://tiktok.com/@vstorefn1" },
  { name: "Whatsapp", icon: faWhatsapp, href: "https://wa.me/5519992871493" },
]

const cardItems = [
  { title: "DUOBOOST", body: "Você irá jogar duo com um jogador profissional até o elo desejado.", url: "/duoboost" },
  { title: "ELOJOB", body: "Um jogador profissional irá garantir o elo desejado jogando em sua conta.", url: "/elojob" },
  { title: "VITÓRIAS", body: "Escolha quantas vitórias deseja receber por um profissional em sua conta.", url: "/vitorias" },
  { title: "COACH", body: "Melhore sua gameplay através de práticas com professores. (EM BREVE)", url: "/" }
]

const textFirstItems = [
  { title: "SEGURANÇA, REPUTAÇÃO E CONFIANÇA!", content: "Confiabilidade comprovada por milhares de clientes satisfeitos, garantia de qualidade e ética em cada elojob realizado, processo seguro e confidencial, sem riscos para sua conta, proteção contra banimentos e outras consequências indesejadas", icon: lucide.Lock },
  { title: "PREÇOS E FLEXIBILIDADE", content: " Oferecemos os melhores preços do mercado, Valor justo pelo serviço excepcional que entregamos, serviços adaptados ao seu horário e necessidades, flexibilidade para personalizar seu pedido conforme desejado.", icon: lucide.HeartHandshake },
]

const textSecondItems = [
  { title: "ENTREGA E PROFISSIONAIS EXPERIENTES", content: "Daremos inicio assim que o pedido for feito, a entrega será rápida e eficiente pois contamos com alguns dos melhores jogadores do servidor brasileiro. Garantimos segurança e qualidade em cada serviço prestado.", icon: lucide.Check },
  { title: "SUPORTE PERSONALIZADO", content: "Suporte 24h via Whatsapp e Discord, atendimento personalizado para todas as suas necessidades, estamos aqui para ajudar do início ao fim da sua jornada.", icon: lucide.UserRound },
]

const menuItems = [
  { text: "DUOBOOST", href: "/duoboost" },
  { text: "ELOJOB", href: "/elojob" },
  { text: "VITÓRIAS", href: "/vitorias" },
  { text: "DISCORD", href: "/" },
  { text: "TIKTOK", href: "/" },
  { text: "INSTAGRAM", href: "http://tiktok.com/@vstorefn1" },
  { text: "WHASTAPP", href: "/" },
]

const faq = [
  { title: "COMO FUNCIONA?", content: "Depois de selecionar seus produtos, você será direcionado ao nosso WhatsApp, onde finalizaremos sua compra e estaremos à disposição para ajudar sobre o processo da sua conta!" },
  { title: "EXISTE CHANCE DE SUSPENSÃO ADQUIRINDO UM DOS SERVIÇOS?", content: "Não existe nenhuma possibilidade da sua conta tomar BAN, a chance é 0." },
  { title: "COMO FUNCIONA O PAGAMENTO?", content: "O pagamento deverá ser realizado e confirmado através do chat do WhatsApp para que possamos encaminhar o pedido para o Booster responsável, nós optamos por diversos tipos de pagamento sendo eles: PIX, Crypto, Paypal, Boleto." },
  { title: "O QUE ACONTECE SE PASSAR DO PRAZO DE ENTREGA COMBINADO?", content: "Antes de um jogador se juntar à nossa equipe, ele passa por um rigoroso processo seletivo, onde selecionamos apenas os mais dedicados, habilidosos e responsáveis para o serviço da ranqueada. Em raras situações, esse prazo pode ser excedido. Quando isso ocorre, entraremos em contato para informar o novo prazo de entrega, que pode ser de até 3 dias úteis a mais que o prazo dado. Dependendo da razão do atraso, também podemos oferecer um bônus de vitórias em sua conta ou descontos em nossos serviços." },
  { title: "COMO SEI QUE MINHA CONTA NÃO SERÁ ROUBADA?", content: "Somos uma empresa comprometida com a integridade, e todos os nossos colaboradores compartilham dos mesmos valores. Portanto, essa situação não é aceitável. Além disso, precisamos do seu e-mail cadastrado na conta Riot para proceder com a troca de senha ou qualquer outra alteração. No momento do pedido, apenas solicitamos o usuário e a senha da conta Riot. Recomendamos sempre que você altere a senha para uma provisória durante o período do serviço, visando aumentar a segurança." },
  { title: "QUEM FICARÁ SABENDO QUE EU COMPREI O SERVIÇO?", content: "Ninguém vai perceber! Durante as partidas, nossos Boosters ativarão o CHAT OFF, que é apenas um código usado no CMD que desativa todas as funções de chat do jogo. Assim, sua conta parecerá offline para todos na sua lista de amigos." },
]
export default function Home() {
  return (
    <>
          <WhatsappButton />

      <NavigationBar />

      <div className={sty.containerMain}>
        <h2 className={sty.secondaryTitle}>
          NÓS TE AJUDAMOS A <span className={sty.span}> CONQUISTAR O RANK </span>
        </h2>
        <h1 className={sty.primaryTitle}>
          QUE VOCÊ <span className={sty.span}> MERECE! </span>
        </h1>
        <div className="grid justify-center">
          <Button as={Link} href="#service" size="lg" color="primary">
            NOSSOS SERVIÇOS
          </Button>
          <div className="flex gap-2 mt-3 justify-center">
          {iconsMedia.map((item, index) => (
            <Tooltip color="secondary" content={item.name} key={index} placement="bottom">
                <Button color="primary" isExternal={true} className="text-default-" variant="flat" as={Link} isIconOnly key={index} href={item.href}>
                  <FontAwesomeIcon icon={item.icon} />
                </Button>
              
            </Tooltip>
          ))}
          </div>
        </div>
      </div>
      <img className={sty.imgVandal} alt="vandal" src="/vandalGaia.webp" width={300} height={300} />

      <Background />
      <div id="service">
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
        <h1 className={sty.title}> PERGUNTAS FREQUENTES  </h1>
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
      <Footer />

    </>
  )
}


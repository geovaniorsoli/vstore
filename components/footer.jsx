import { Link } from "@nextui-org/react";
import styles from "../styles/Componentes/footer.module.css";
import { Modal, ScrollShadow, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Popover, PopoverTrigger, PopoverContent, Tooltip } from "@nextui-org/react";
export default function Footer() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const terms = [
        { text: "1. O cliente não poderá jogar partidas Ranqueadas no período vigente do serviço e também não poderá logar na conta no MOMENTO em que o serviço estiver sendo executado." },
        { text: "2. Em caso raro de o Booster falhar ou cair de divisão, garantimos integralmente o retorno do elo e classificatória sem custo adicional." },
        { text: "3. Caso esteja ganhando menos de 17 pontos por vitória, será cobrada a taxa de neutralização de MMR." },
        { text: " 4. Caso esteja caindo em filas Imortal+, será cobrada uma taxa de MMR Buffado." },

    ]
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerImage}>
                        <img alt="logo" src="/logotipoBranca.png" width={150} height={150} />
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>SERVIÇOS </h3>
                        <Link href="/duoboost" color="primary">DuoBoost</Link>
                        <Link href="/elojob" color="primary">Elojob</Link>
                        <Link href="/vitorias" color="primary">Vitórias</Link>
                        <Link isDisabled href="/coach" color="primary">Coach</Link>
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>LINKS</h3>
                        <Link href="https://discord.gg/QM8qP6W99M" color="primary">Discord</Link>
                        <Link href="/elojob" color="primary">Whatsapp</Link>
                        <Link href="https://www.instagram.com/vstorevlr/" color="primary">Instagram</Link>
                        <Link href="https://www.tiktok.com/@vstorevlr?lang=pt-BR" color="primary">Tiktok</Link>
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>ÁREA DO CLIENTE</h3>
                        <Popover color="primary" placement="top" showArrow={true}>
                            <PopoverTrigger>
                                <Button className="mb-2" variant="flat" color="primary">Suporte</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="px-1 grid items-center py-3">
                                    <Link isExternal showAnchorIcon href="https://wa.me/5519992871493" className="text-small text-default- font-bold">WhatsApp</Link>
                                    <Link isExternal showAnchorIcon href="https://discord.gg/QM8qP6W99M" className="text-small text-default- font-bold">Discord</Link>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Button onClick={onOpen} variant="flat" color="primary">Termos de uso e privacidade</Button>
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>FORMAS DE PAGAMENTO</h3>
                        <img alt="logo" src="/pagamentos.webp" width={250} height={250} />
                    </div>
                    <div className={styles.footerValorant}>
                        <p>Valorant é uma marca registrada da Riot Games, Inc. Nós não somos de nenhuma forma afiliados, associados ou endossado pela Riot Games, Inc. Todos os direitos autoriais, marcas imagens e marcas de serviço pertecem a seus respectivos proprietários.</p>
                    </div>
                </div>
                <div className={styles.footerCopy}>
                    <p>&copy; {new Date().getFullYear()} Vstore. All rights reserved.</p>
                    <Tooltip color="primary" placement="right" content={
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">O cara fez o site</div>
                            <div className="text-tiny">Clica ai para ver mais projetos</div>
                            <div className="text-tiny">ou fazer o seu comigo</div>
                        </div>
                    }

                    >
                        <Link isExternal underline="always" showAnchorIcon href="https://geovaniorsoli.vercel.app/">Desenvolvido por Geovaniorsoli</Link>
                    </Tooltip>
                </div>
            </footer>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Termos de uso</ModalHeader>
                            <ModalBody>
                                <ScrollShadow hideScrollBar className="w-[300px] h-[400px] flex-col items-center justify-center flex ">

                                    {terms.map((item, index) => (
                                        <span className="mt-2" key={index}>
                                            {item.text}
                                        </span>
                                    ))}

                                </ScrollShadow>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Fechar
                                </Button>
                                <Button color="primary" variant="light" onPress={onClose}>
                                    Entendi
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

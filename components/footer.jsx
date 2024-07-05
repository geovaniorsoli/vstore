import { Link } from "@nextui-org/react";
import styles from "../styles/Componentes/footer.module.css";
import Image from "next/image";
import { Modal, ScrollShadow, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import * as lucide from "lucide-react"
export default function Footer() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerImage}>
                        <Image alt="logo" src="/img/logotipobranca.png" width={150} height={150} />
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>SERVIÇOS <lucide Gear /> </h3>
                        <Link href="/duoboost" color="primary">DuoBoost</Link>
                        <Link href="/elojob" color="primary">Elojob</Link>
                        <Link href="/vitorias" color="primary">Vitórias</Link>
                        <Link href="/coach" color="primary">Coach</Link>
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>LINKS</h3>
                        <Link href="/duoboost" color="primary">Discord</Link>
                        <Link href="/elojob" color="primary">Whatsapp</Link>
                        <Link href="/vitorias" color="primary">Instagram</Link>
                        <Link href="/coach" color="primary">Tiktok</Link>
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>ÁREA DO CLIENTE</h3>
                        <Button className="mb-2" variant="flat" href="/duoboost" color="primary">Suporte</Button>
                        <Button onPress={onOpen} variant="flat" href="/elojob" color="primary">Políticas de privacidade</Button>
                    </div>
                    <div className={styles.footerValorant}>
                        <p>Valorant é uma marca registrada da Riot Games, Inc. Nós não somos de nenhuma forma afiliados, associados ou endossado pela Riot Games, Inc. Todos os direitos autoriais, marcas imagens e marcas de serviço pertecem a seus respectivos proprietários.</p>
                    </div>
                </div>
                <div className={styles.footerCopy}>
                    <p>&copy; {new Date().getFullYear()} Vstore. All rights reserved.</p>
                    <p>Desenvolvido por Geovaniorsoli</p>
                </div>
            </footer>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-black">Politicas de privacidade e termos</ModalHeader>
                            <ModalBody>
                                <ScrollShadow hideScrollBar className="w-[300px] h-[400px] flex-col items-center justify-center flex text-black">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Ex temporibus sit
                                    soluta non ducimus adipisci, esse tempora
                                    ipsa consectetur pariatur tenetur eaque quos
                                    odit facere dolorum hic explicabo? Ab, blanditiis.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Qui dignissimos quae rerum dolore optio eligendi
                                    deleniti aperiam cumque doloribus aut at iure quam, nisi l
                                    abore doloremque. Odio quibusdam consequuntur dolore Lorem
                                    ipsum, dolor sit amet consectetur adipisicing elit. Commodi
                                    voluptas atque nihil, natus delectus ducimus unde deserunt
                                    officia error dignissimos vel impedit reiciendis perferen
                                    dis minus voluptate est iste praesentium doloremque.
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Ex temporibus sit
                                    soluta non ducimus adipisci, esse tempora
                                    ipsa consectetur pariatur tenetur eaque quos
                                    odit facere dolorum hic explicabo? Ab, blanditiis.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Qui dignissimos quae rerum dolore optio eligendi
                                    deleniti aperiam cumque doloribus aut at iure quam, nisi l
                                    abore doloremque. Odio quibusdam consequuntur dolore Lorem
                                    ipsum, dolor sit amet consectetur adipisicing elit. Commodi
                                    voluptas atque nihil, natus delectus ducimus unde deserunt
                                    officia error dignissimos vel impedit reiciendis perferen
                                    dis minus voluptate est iste praesentium doloremque.
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Ex temporibus sit
                                    soluta non ducimus adipisci, esse tempora
                                    ipsa consectetur pariatur tenetur eaque quos
                                    odit facere dolorum hic explicabo? Ab, blanditiis.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Qui dignissimos quae rerum dolore optio eligendi
                                    deleniti aperiam cumque doloribus aut at iure quam, nisi l
                                    abore doloremque. Odio quibusdam consequuntur dolore Lorem
                                    ipsum, dolor sit amet consectetur adipisicing elit. Commodi
                                    voluptas atque nihil, natus delectus ducimus unde deserunt
                                    officia error dignissimos vel impedit reiciendis perferen
                                    dis minus voluptate est iste praesentium doloremque.
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

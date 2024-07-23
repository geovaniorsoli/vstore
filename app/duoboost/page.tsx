"use client"
import { useState, useEffect, useRef } from 'react'
import { toast } from 'sonner'
import {
    Select,
    Button,
    SelectItem,
    Avatar,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    CheckboxGroup,
    Checkbox,
    Tooltip,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    ScrollShadow,
    Link,
    Textarea,
} from "@nextui-org/react"
import { elosInitial, elosWish, Elo } from '../array/eloDuo'
import * as lucide from "lucide-react"
import sty from "../../styles/elojob.module.css"
import NavigationBar from "@/components/nav-bar"
import Footer from "@/components/footer"


export default function Duoboost() {
    const [selectedInitialElo, setSelectedInitialElo] = useState<Elo | null>(null)
    const [selectedWishElo, setSelectedWishElo] = useState<Elo | null>(null)
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const statebutton = () => {
        if (!selectedWishElo || !selectedInitialElo || selectedInitialElo.value === selectedWishElo.value || selectedInitialElo.value > selectedWishElo.value) {
            return (
                <>
                    <lucide.Ban size={15} /> Selecione os items corretamente
                </>
            )
        } else {
            return (
                <>
                    <lucide.ShoppingCart size={15} /> Finalizar Pedido
                </>
            )
        }
    }

    const stateColor = () => {
        if (!selectedWishElo || !selectedInitialElo || selectedInitialElo.value === selectedWishElo.value || selectedInitialElo.value > selectedWishElo.value) {
            return "danger"
        } else {
            return "success"
        }
    }

    const handleInitialEloChange = (value: string) => {
        const selected = elosInitial.find(item => item.value === parseInt(value, 10))
        setSelectedInitialElo(selected || null)
    }

    const handleWishEloChange = (value: string) => {
        const selected = elosWish.find(item => item.value === parseInt(value, 10))
        setSelectedWishElo(selected || null)
    }

    const [agreedTerms, setAgreedTerms] = useState(false)
    const [selected, setSelected] = useState<string[]>([])
    const [valueTextSize, setValueTextSize] = useState<string>("")
    const maxTextArea = 50
    const [totalEloPrice, setTotalPrice] = useState<number>(0)

    const calculatePrice = (eloInitial: number, eloFinal: number): number => {
        let totalEloPrice = 0

        for (let index = eloInitial; index <= eloFinal; index++) {
            totalEloPrice += elosWish[index].price
        }

        return totalEloPrice
    }

    const calculateAdditionalPrice = (selected: string[], totalEloPrice: number): number => {
        let additionalPrice = 0;
        selected.forEach(item => {
            const add = additional.find(add => add.value === item);
            if (add) {
                additionalPrice += (totalEloPrice * add.porcentual) / 100;
            }
        });
        return additionalPrice;
    };

    useEffect(() => {
        if (selectedInitialElo !== null && selectedWishElo !== null) {
            try {
                if (selectedInitialElo.value > selectedWishElo.value) {
                    toast.error("O elo atual é maior que o desejado");
                } else if (selectedInitialElo.value === selectedWishElo.value) {
                    toast.error("Elos iguais");
                } else {
                    toast.success("Selecionado corretamente");
                    const newTotalEloPrice = calculatePrice(selectedInitialElo.value, selectedWishElo.value);
                    const newTotalAdditionalPrice = calculateAdditionalPrice(selected, newTotalEloPrice);
                    const total = newTotalEloPrice + newTotalAdditionalPrice;
                    setTotalPrice(total);
                }
            } catch (error) {
                console.error("Erro ao calcular preço total:", error);
            }
        }
    }, [selected, selectedInitialElo, selectedWishElo])


    const additional = [
        { product: "+1 Vitória após conclusão (15%)", value: "Vitória adicional", porcentual: 15, tooltipContent: "Após concluirmos seu pedido, jogaremos mais uma partida garantindo uma vitória!" },
        { product: "Seleção de Agentes (35%)", value: "Agentes", porcentual: 35, tooltipContent: "Jogaremos apenas com os agentes que você escolher. Você pode definir quantos desejar, sem limites!" },
        { product: "Entrega à Jato (35%)", value: "Entrega", porcentual: 35, tooltipContent: "Além de passar na frente de TODOS os pedidos, jogaremos sem parar na sua conta até atingirmos o Elo desejado, garantindo a entrega mais rápida possível!" },
    ]

    const Terms = [
        { text: "O cliente não poderá jogar partidas Ranqueadas no período vigente do serviço e também não poderá logar na conta no MOMENTO em que o serviço estiver sendo executado." },
        { text: "Em caso raro de o Booster falhar ou cair de divisão, garantimos integralmente o retorno do elo e classificatória sem custo adicional." },
        { text: "Caso esteja ganhando menos de 17 pontos por vitória, será cobrada a taxa de neutralização de MMR." },
        { text: "Caso esteja caindo em filas Imortal+, será cobrada uma taxa de MMR Buffado." },
    ]

    const Whatsapp = () => {
        let message = " *Resumo do pedido:* \n \n"
        message += "Serviço escolhido \n"
        message += "*Elojob/eloboost* \n"

        message += "\n"
        message += "*Elo Inicial:* " + selectedInitialElo?.name + "\n"
        message += "*Elo desejado:* " + selectedWishElo?.name + "\n"
        message += "\n"

        if (selected.length > 0) {
            message += `*Adicionais:* ${selected.join(", ")} \n`
            message += "\n"
        } else {
            message += "Nenhum item adicional \n"
        }
        if (valueTextSize.length > 0) {
            message += "Mensagem Adicional \n "
            message += "\n"
            message += `*Mensagem:* ${valueTextSize}\n`
        } else {
            message += "Nenhuma mensagem adicional \n"
            message += "\n"
        }
        message += `Total: *R$${totalEloPrice.toFixed(2)}*\n`
        message += '\n'
        message += "*Vstore* agradece a preferência!"
        return encodeURIComponent(message)
    }

    const WhatsappUrl = `https://wa.me/5519992871493?text=${Whatsapp()}`


    return (
        <>
            <NavigationBar />
            <div className={sty.containerMain}>
                <div className={sty.titlecontainer}>
                    <h1 className={sty.title}>DUOBOOST</h1>
                    <h2 className={sty.subtitle}>
                        Um ProPlayer jogará com você até você alcançar o Elo desejado. Não é necessário passar os dados da conta, pois um Radiante jogará em outra conta junto com você!                    </h2>
                </div>
                <Card className={sty.card}>
                    <CardHeader className={sty.cardHeader}>
                        <h1>ESCOLHA O SERVIÇO A SER FEITO. <span className='text-red-500'> * </span></h1>
                    </CardHeader>
                    <CardBody className={sty.cardBody}>
                        <div className={sty.selectContainer}>
                            <div className={sty.selectWithAvatar}>
                                <Avatar
                                    alt={selectedInitialElo?.name || "Default"}
                                    className={sty.selectedAvatar}
                                    src={selectedInitialElo?.src || "/avatarNone.png"}
                                />
                                <Select
                                    isRequired
                                    className={sty.select}
                                    label="Elo atual"
                                    placeholder="Selecione o elo em que esteja atualmente"
                                    value={selectedInitialElo ? selectedInitialElo.value.toString() : ''}
                                    onChange={(e) => handleInitialEloChange(e.target.value)}
                                >
                                    {elosInitial.map((item, index) => (
                                        <SelectItem
                                            key={index}
                                            value={item.value.toString()}
                                            startContent={<Avatar alt={item.name} className="w-6 h-6 text-black" src={item.src} />}
                                        >
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className={sty.selectContainer}>
                            <div className={sty.selectWithAvatar}>
                                <Avatar
                                    alt={selectedWishElo?.name || "Default"}
                                    className={sty.selectedAvatar}
                                    src={selectedWishElo?.src || "/avatarNone.png"}
                                />
                                <Select
                                    isRequired
                                    className={sty.select}
                                    label="Elo desejado"
                                    placeholder="Selecione o elo qual almeja"
                                    value={selectedWishElo ? selectedWishElo.value.toString() : ''}
                                    onChange={(e) => handleWishEloChange(e.target.value)}
                                >
                                    {elosWish.map((item, index) => (
                                        <SelectItem
                                            key={index}
                                            value={item.value.toString()}
                                            startContent={<Avatar alt={item.name} className="w-6 h-6 text-black" src={item.src} />}
                                        >
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <CardHeader className={sty.cardHeader}>
                            <h1>TURBINE SEU PEDIDO </h1>
                        </CardHeader>
                        <div className={sty.checkboxGroup}>
                            <CheckboxGroup
                                label="Escolha os adicionais"
                                color="primary"
                                value={selected}
                                onValueChange={setSelected}
                            >
                                {additional.map((add, index) => (
                                    <Checkbox className={sty.flex} key={index} value={add.value}>
                                        <span className={sty.checkboxContent}>
                                            {add.product}
                                            <Tooltip color='foreground' className='w-[300]' showArrow={true} placement="right" content={add.tooltipContent} >
                                                <lucide.Info size={20} className={sty.icon} />
                                            </Tooltip>
                                        </span>
                                    </Checkbox>
                                ))}
                            </CheckboxGroup>
                            <div className='text-default-500 text-small'>
                                {selected.length === 0 ? (
                                    <p> Nenhum item Escolhido </p>
                                ) : (
                                    <p> {selected.join(", ")} </p>
                                )
                                }
                            </div>
                        </div>
                        <CardHeader className={sty.cardHeader}>
                            <h1>MENSAGEM</h1>
                        </CardHeader>
                        <Textarea
                            maxLength={maxTextArea}
                            isInvalid={valueTextSize.length >= maxTextArea}
                            onValueChange={setValueTextSize}
                            value={valueTextSize}
                            placeholder="Digite aqui uma mensagem que queria nos enviar."
                        />
                    </CardBody>
                    <Divider />
                    <CardFooter className={sty.cardFooter}>
                        <h1 className={sty.FinalPrice}>Total: R${totalEloPrice.toFixed(2)}</h1>
                        <Button
                            isDisabled={!selectedInitialElo || !selectedWishElo || selectedInitialElo.value == selectedWishElo.value || selectedInitialElo.value > selectedWishElo.value}
                            color={stateColor()}
                            variant="shadow"
                            className='text-default-'
                            onPress={onOpen}>
                            {statebutton()}
                        </Button>
                    </CardFooter>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1"><lucide.ShoppingCart className='text-green-500' /></ModalHeader>
                                    <ModalBody>
                                        <h1>TERMOS DE USO <span className='text-red-500'> LEIA IMPORTANTE!</span> </h1>
                                        <ScrollShadow className="w-[max] h-[200px]">
                                            {Terms.map((Terms, index) => (
                                                <ul >
                                                    <li className='mb-3' key={index}>{index + 1}. {Terms.text}</li>
                                                </ul>
                                            ))}
                                        </ScrollShadow>
                                        <Checkbox
                                            onValueChange={setAgreedTerms}
                                            color='success'>
                                            Concordo com os termos de uso.
                                        </Checkbox>
                                        <Divider />
                                        <h1> RESUMO DO PEDIDO </h1>
                                        <ul>
                                            <li className='flex'>
                                                <lucide.Dot /> Do elo <span className='text-green-500 mr-1 ml-1'> {selectedInitialElo?.name} </span> ao <span className='text-green-500 mr-1 ml-1'> {selectedWishElo?.name} </span>
                                            </li>
                                            <li className='flex'>
                                                <lucide.Dot /> {selected.length === 0 ? (
                                                    <p className='text-default-500'> Nenhum item Adicional </p>
                                                ) : (
                                                    <p> ADICIONAL: <span className='text-default-500 text-small'>  ({selected.join(", ")}) </span> </p>
                                                )}
                                            </li>
                                            <li className='flex'>
                                                <lucide.Dot /> {valueTextSize.length > 0 ? (
                                                    <p className='text-default-'> Mensagem Adicional </p>
                                                ) : (
                                                    <p className='text-default-500'>Nenhuma mensagem adicional </p>
                                                )}
                                            </li>
                                        </ul>
                                        <Divider />
                                    </ModalBody>
                                    <ModalFooter className='flex justify-between items-center'>
                                        <h1 className='text-2xl'> Total: R${totalEloPrice.toFixed(2)} </h1>
                                        <Button as={Link} target='blank' href={WhatsappUrl} isDisabled={!agreedTerms} className='text-' color="success" variant="shadow" onPress={onClose}>
                                            CONCLUIR PEDIDO <lucide.Check />
                                        </Button>
                                    </ModalFooter>
                                    <ModalFooter className='grid justify-center items-center'>
                                        <Link isExternal showAnchorIcon color="primary" href='https://wa.me/5519992871493?text=Estou%20com%20algumas%20d%C3%BAvidas%20antes%20de%20finalizar%20meu%20pedido,%20poderia%20me%20ajudar?'>
                                            Ainda tem dúvidas? fale conosco.
                                        </Link>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </Card>

                <div className={sty.titlecontainer}>
                    <h2 className={sty.subtitle}>
                        No DUOBOOST/EloBoost, um jogador ProPlayer de nível Radiante irá logar em sua
                        conta e jogar por você, como se fosse você, e irá upar até o Elo que você
                        contratou. Tudo feito de forma rápida, discreta e segura.
                        Não utilizamos hacks ou qualquer tipo de programa ou recurso que dê vantagem extra --
                        trata-se de um serviço premium feito por ProPlayers de verdade do cenário
                        competitivo profissional.
                    </h2>
                </div>

                <img className={sty.img} alt="phantom" src="/sentinelaLuz.webp" width={200} height={200} />

            </div>
            <Footer />
        </>
    )
}

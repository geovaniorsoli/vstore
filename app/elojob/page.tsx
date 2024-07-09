"use client";
import { useState, useEffect } from 'react';
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
} from "@nextui-org/react";
import { elosInitial, elosWish, Elo } from '../array/elo';
import * as lucide from "lucide-react";
import sty from "../../styles/elojob.module.css";
import NavigationBar from "@/components/nav-bar";
import Footer from "@/components/footer";

export default function EloJob() {
    const [selectedInitialElo, setSelectedInitialElo] = useState<Elo | null>(null);
    const [selectedWishElo, setSelectedWishElo] = useState<Elo | null>(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleInitialEloChange = (value: string) => {
        const selected = elosInitial.find(item => item.value === parseInt(value, 10));
        setSelectedInitialElo(selected || null);
    };

    const handleWishEloChange = (value: string) => {
        const selected = elosWish.find(item => item.value === parseInt(value, 10));
        setSelectedWishElo(selected || null);
    };

    const [selected, setSelected] = useState<string[]>([]);

    const [valueTextSize, setValueTextSize] = useState<string>("");

    const maxTextArea = 50;

    const[totalEloPrice, setTotalPrice] = useState<number>(0)

    const calculatePrice = (eloInitial: number, eloFinal: number): number => {
        let totalEloPrice = 0

        if(!selectedInitialElo || !selectedWishElo || selectedInitialElo < selectedWishElo){
            throw new Error("erro de logica")
        }

        for (let i = eloInitial; i <= eloFinal; i++){
            totalEloPrice += elosWish[i].price
        }

        return totalEloPrice
    }    

    const calculateAddtionalPrice = (): number =>{
        let additionalPrice = 0
        selected.forEach(item => {
            const add = additional.find(add => add.value === item)
            if(add){
                additionalPrice += (totalEloPrice * add.porcentual) / 100
            }
        })
        return additionalPrice
    }

    useEffect(() => {
        if (selectedInitialElo !== null && selectedWishElo !== null) {
            try {
                const totalEloPrice = calculatePrice(selectedInitialElo.value, selectedWishElo.value);
                const TotalAddtionalPrice = calculateAddtionalPrice()
                const total = totalEloPrice + TotalAddtionalPrice
                setTotalPrice(total);
            } catch (error) {
                console.error("Erro ao calcular preço total:");
            }
        }
    }, [selected, selectedInitialElo, selectedWishElo]);


    const additional = [
        { product: "Nickname Oculto (Cortesia)", value: "Nickname", porcentual: 0, tooltipContent: "Através das configurações do Valorant, ocultaremos seu nickname para que seu nick real não apareça nas partidas do jogo." },
        { product: "Seleção de Horário (15%)", value: "Horário", porcentual: 15, tooltipContent: "Jogaremos apenas dentro do horário que você definir." },
        { product: "+1 Vitória após conclusão (15%)", value: "Vitória adicional", porcentual: 15, tooltipContent: "Após concluirmos seu pedido, jogaremos mais uma partida garantindo uma vitória!" },
        { product: "Seleção de Agentes (10%)", value: "Agentes", porcentual: 10, tooltipContent: "Jogaremos apenas com os agentes que você escolher. Você pode definir quantos desejar, sem limites!" },
        { product: "Stream via Discord (25%)", value: "Stream", porcentual: 25, tooltipContent: "Em sessão privada no Discord, iremos transmitir os jogos ao vivo para você ir acompanhando em tempo real o andamento do seu pedido." },
        { product: "Entrega à Jato (35%)", value: "Entrega", porcentual: 35, tooltipContent: "Além de passar na frente de TODOS os pedidos, jogaremos sem parar na sua conta até atingirmos o Elo desejado, garantindo a entrega mais rápida possível!" },
    ];

    const Therms = [
        { text: "O cliente não poderá jogar partidas Ranqueadas no período vigente do serviço e também não poderá logar na conta no MOMENTO em que o serviço estiver sendo executado." },
        { text: "Em caso raro de o Booster falhar ou cair de divisão, garantimos integralmente o retorno do elo e classificatória sem custo adicional." },
        { text: "Caso esteja ganhando menos de 17 pontos por vitória, será cobrada a taxa de neutralização de MMR." },
        { text: "Caso esteja caindo em filas Imortal+, será cobrada uma taxa de MMR Buffado." },
    ];    
    
    return (
        <>
            <NavigationBar />
            <div className={sty.containerMain}>
                <div className={sty.titlecontainer}>
                    <h1 className={sty.title}>ELOBOOST</h1>
                    <h2 className={sty.subtitle}> Nesta modalidade, um ProPlayer Radiante irá jogar na sua conta como se fosse você, até atingir o Elo desejado. Ideal para upar rápido com segurança e qualidade! Serviço ágil e discreto.
                    </h2>
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
                                    src={selectedInitialElo?.src || "/path/to/default/avatar.png"}
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
                                    src={selectedWishElo?.src || "/path/to/default/avatar.png"}
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
                        <h1>Total: {totalEloPrice.toFixed(2)}</h1>
                        <Button color="primary" variant="shadow" onPress={onOpen}>
                            Concluir Pedido
                        </Button>
                    </CardFooter>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1"><lucide.ShoppingBagIcon /></ModalHeader>
                                    <ModalBody>
                                        <h1>TERMOS DE USO <span className='text-red-500'> LEIA IMPORTANTE!</span> </h1>
                                        <ScrollShadow className="w-[max] h-[200px]">
                                            {Therms.map((therm, index) => (
                                                <ul >
                                                    <li className='mb-3' key={index}>{index + 1}. {therm.text}</li>
                                                </ul>
                                            ))}
                                        </ScrollShadow>
                                        <Checkbox isDisabled color='success'>
                                            Concordo com os termos de uso.
                                        </Checkbox>
                                        <Divider />
                                        <h1> RESUMO DO PEDIDO </h1>

                                        <ul>
                                            <li className='flex'>
                                                <lucide.Dot /> ELO INICIAL: {selectedInitialElo?.name}
                                            </li>
                                            <li className='flex'>
                                                <lucide.Dot /> ELO FINAL DESEJADO: {selectedWishElo?.name}
                                            </li>
                                        </ul>

                                        <div className='text-default-500 text-small'>
                                            {selected.length === 0 ? (
                                                <p> Nenhum item Adicional Escolhido </p>

                                            ) : (
                                                <p>({selected.join(", ")}) </p>
                                            )}
                                        </div>

                                    </ModalBody>
                                    <ModalFooter className='flex justify-between items-center'>
                                        <h1> Total: {totalEloPrice.toFixed(2)} </h1>
                                        <Button color="primary" variant="shadow" onPress={onClose}>
                                            CONCLUIR PEDIDO
                                        </Button>
                                    </ModalFooter>
                                    <ModalFooter className='flex justify-center items-center'>
                                        <Link isExternal showAnchorIcon color="primary" href='/'>
                                            Ainda tem dúvidas? fale conosco.
                                        </Link>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </Card>
            </div>
            <Footer />
        </>
    );
}

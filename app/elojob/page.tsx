"use client"
import { useState } from 'react';
import NavigationBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import sty from "../../styles/elojob.module.css";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { elosInitial, elosWish, Elo } from '../array/elo';
import  * as lucide from "lucide-react"

export default function EloJob() {
    const [selectedInitialElo, setSelectedInitialElo] = useState<Elo | null>(null);
    const [selectedWishElo, setSelectedWishElo] = useState<Elo | null>(null);

    const handleInitialEloChange = (value: string) => {
        console.log("Selected initial elo value:", value);
        const selected = elosInitial.find(item => item.value === parseInt(value, 10));
        console.log("Selected initial elo:", selected);
        setSelectedInitialElo(selected || null);
    };

    const handleWishEloChange = (value: string) => {
        console.log("Selected wish elo value:", value);
        const selected = elosWish.find(item => item.value === parseInt(value, 10));
        console.log("Selected wish elo:", selected);
        setSelectedWishElo(selected || null);
    };

    const defaultAvatarSrc = <lucide.AsteriskIcon /> 

    return (
        <>
            <NavigationBar />
            <div className={sty.containerTitle}>
                <h1 className={sty.title}>ELOJOB</h1>
                <h1 className={sty.subtitle}>
                    Nesta modalidade, um ProPlayer Radiante irá jogar na sua conta como se fosse você, até atingir o Elo desejado. Ideal para upar rápido com segurança e qualidade! Serviço ágil e discreto.
                </h1>
            </div>

            <div className={sty.containerCenter}>
                <div className={sty.selectContainer}>
                    <Select
                        className={sty.select}
                        label="Elo atual"
                        placeholder="Elo atual"
                        description="Selecione o elo em que esteja atualmente"
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
                    <div className={sty.selectedAvatarContainer}>
                        <Avatar
                            className={`${sty.selectedAvatar} ${selectedInitialElo ? '' : sty.defaultAvatar}`}
                            src={selectedInitialElo?.src || defaultAvatarSrc}
                        />
                    </div>
                </div>

                <div className={sty.selectContainer}>
                    <Select
                        className={sty.select}
                        label="Elo desejado"
                        placeholder="Elo desejado"
                        description="Selecione o elo qual almeja"
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
                    <div className={sty.selectedAvatarContainer}>
                        <Avatar
                            alt={selectedWishElo?.name || 'Avatar Padrão'}
                            className={`${sty.selectedAvatar} ${selectedWishElo ? '' : sty.defaultAvatar}`}
                            src={selectedWishElo?.src || defaultAvatarSrc}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

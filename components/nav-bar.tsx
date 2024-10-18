"use client";
import { useState, useEffect } from "react";
import {
    Navbar,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    Link,
    Tooltip,
} from "@nextui-org/react";
import sty from "../styles/Componentes/nav.module.css";

export default function NavigationBar() {
    const menuItems = [
        { text: "HOME", href: "/" },
        { text: "DUOBOOST", href: "/duoboost" },
        { text: "ELOJOB", href: "/elojob" },
        { text: "VITÓRIAS", href: "/vitorias" },
        { text: "DISCORD", href: "https://discord.com/invite/SeAWSBVXhE" },
        { text: "TIKTOK", href: "https://www.tiktok.com/@vstorevlr?lang=pt-BR" },
        { text: "INSTAGRAM", href: "https://www.instagram.com/vstorevlr/" },
        { text: "WHATSAPP", href: "/https://wa.me/5519992871493" },
    ];

    const [isBlurry, setIsBlurry] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0 && !isMenuOpen) {
                setIsBlurry(false)
            } else {
                setIsBlurry(true)
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <Navbar
            isBlurred={isBlurry || isMenuOpen}
            className={`${isBlurry || isMenuOpen ? "bg-opacity-60" : "bg-opacity-100"} ${sty.navbar}`}
        >
            <NavbarContent className="sm:hidden" justify="center">
                <NavbarMenuToggle onClick={handleMenuToggle} />
            </NavbarContent>
            <div className={sty.navbarContent}>
                <div className={sty.navLeft}>
                    <Link className={sty.navLink} href="/elojob">
                        ELOJOB
                    </Link>
                    <Link className={sty.navLink} href="/duoboost">
                        DUOBOOST
                    </Link>
                </div>
                <div className={sty.navCenter}>
                    <Link className={sty.navLink} href="/">
                        <img className={sty.img} alt="logotipo" src="/logotipoBranca.png" />
                    </Link>
                </div>
                <div className={sty.navRight}>
                    <Link className={sty.navLink} href="/vitorias">
                        VITÓRIAS
                    </Link>
                    <Link isDisabled className={sty.navLink} href="#">
                        COACH
                    </Link>
                </div>
            </div>
            <Link className={sty.navLink} href="/">
                <img
                    className="sm:hidden"
                    alt="logotipo"
                    src="/logotipoBranca.png"
                    width={100}
                    height={300}
                />
            </Link>
            <NavbarMenu className={`${sty.openNav} ${isMenuOpen ? "bg-gray-800" : ""} sm:bg-transparent`}>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem className={sty.openNav} key={`${item.text}-${index}`}>
                        <Link className={sty.openNavLink} href={item.href} size="lg">
                            {item.text}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

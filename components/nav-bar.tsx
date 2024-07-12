"use client";
import { Navbar, Tooltip, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import sty from "../styles/Componentes/nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function NavigationBar() {
    const menuItems = [
        { text: "DUOBOOST", href: "/duoboost" },
        { text: "ELOJOB", href: "/elojob" },
        { text: "VITÓRIAS", href: "/" },
        { text: "DISCORD", href: "/" },
    ];

    const iconsMedia = [
        { name: "Discord", icon: faDiscord, href: "/" },
        { name: "Instagram", icon: faInstagram, href: "/" },
        { name: "Tiktok", icon: faTiktok, href: "/" },
        { name: "Whatsapp", icon: faWhatsapp, href: "/" },
    ];

    return (
        <Navbar isBlurred className={sty.navbar}>
            <NavbarContent className="sm:hidden" justify="center">
                <NavbarMenuToggle />
            </NavbarContent>
            <div className={sty.navbarContent}>
                <div className={sty.navLeft}>
                    <Link className={sty.navLink} href="/duoboost">
                        DUOBOOST
                    </Link>
                    <Link className={sty.navLink} href="/elojob">
                        ELOJOB
                    </Link>
                </div>
                <div className={sty.navCenter}>
                    <Link className={sty.navLink} href="/">
                        <img className={sty.img}  alt="logotipo" src="/logotipoBranca.png" />
                    </Link>
                </div>
                <div className={sty.navRight}>
                    <Link className={sty.navLink} href="#">
                        VITÓRIAS
                    </Link>
                    <Link className={sty.navLink} href="#">
                        COACH
                    </Link>
                    {iconsMedia.map((item, index) => (
                        <Tooltip color="primary" content={item.name} key={index} placement="bottom">
                        <Link className={sty.iconNav} key={index} href={item.href}>
                            <FontAwesomeIcon icon={item.icon} />
                        </Link>
                            </Tooltip>
                    ))}
                </div>
            </div>
            <Image className="sm:hidden" alt="logotipo" src="/img/logotipoBranca.png" width={100} height={300} />
            <NavbarMenu className={sty.openNav}>
                {menuItems.map((text, index) => (
                    <NavbarMenuItem className={sty.openNav} key={`${text}-${index}`}>
                        <Link className={sty.openNavLink} href={text.href} size="lg">
                            {text.text}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

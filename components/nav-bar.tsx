"use client";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import sty from "../styles/Componentes/nav.module.css"
import * as lucide from "lucide-react"
import Icon from "../components/icons";

export default function NavigationBar() {
    const menuItems = [
        {text: "DUOBOOST", href: "/"},
        {text: "ELOJOB", href: "/"},
        {text: "VITÓRIAS", href: "/"},
        {text: "DISCORD", href: "/"},
    ]

    return (
        <Navbar isBlurred className={sty.navbar}>
        <NavbarContent className="sm:hidden" justify="center">
            <NavbarMenuToggle />
        </NavbarContent>
        <NavbarContent className={`hidden sm:flex ${sty.navbarContent}`}>
            <NavbarItem className={sty.navItemContainer}>
                <Link className={sty.navLink} href="#">
                    DUOBOOST
                </Link>
                <Link className={sty.navLink} href="#">
                    ELOJOB
                </Link>
                
            </NavbarItem>
            <Image className={sty.img} alt="logotipo" src="/img/logotipoBranca.png" width={200} height={500} />
            <NavbarItem>
                <Link className={sty.navLink} href="#">
                    VITÓRIAS
                </Link>
                <Link className={sty.navLink} href="#">
                    COACH
                </Link>
                <Button variant="solid" color="primary" href="#">
                    CONTATOS
                </Button>
            </NavbarItem>
        </NavbarContent>
        <Image className="sm:hidden" alt="logotipo" src="/img/logotipoBranca.png" width={100} height={300} />
            <NavbarMenu className={sty.openNav}>
                {menuItems.map((text, index) => (
                    <NavbarMenuItem className={sty.openNav} key={`${text}-${index}`}>
                        <Link
                            className={sty.openNavLink}
                            href={text.href}
                            size="lg"
                        >
                        {text.text}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

"use client"
import { useState, useEffect } from "react"
import { Navbar, Tooltip, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react"
import Image from "next/image"
import sty from "../styles/Componentes/nav.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
export default function NavigationBar() {
    const menuItems = [
        { text: "DUOBOOST", href: "/duoboost" },
        { text: "ELOJOB", href: "/elojob" },
        { text: "VITÓRIAS", href: "/vitorias" },
        { text: "DISCORD", href: "https://discord.com/invite/SeAWSBVXhE" },
        { text: "TIKTOK", href: "https://www.tiktok.com/@vstorefn1" },
        { text: "INSTAGRAM", href: "http://tiktok.com/@vstorefn1" },
        { text: "WHASTAPP", href: "/" },
    ]

    const [isBlurry, setIsBlurry] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsBlurry(false)
            } else {
                setIsBlurry(true)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <Navbar isBlurred={isBlurry} className={sty.navbar}>
            <NavbarContent className="sm:hidden" justify="center">
                <NavbarMenuToggle />
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
                        <img className={sty.img}  alt="logotipo" src="/logotipoBranca.png" />
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
            <img className="sm:hidden" alt="logotipo" src="/logotipoBranca.png" width={100} height={300} />
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
    )
}

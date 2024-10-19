'use client'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"

import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";


export default function NavBar() {

    const navItems = [
        { title: "About Us", target: "about" },
        { title: "Services", target: "services" },
        { title: "Our Projects", target: "projects" },
        { title: "Our Team", target: "team" },
        { title: "Contact Us", target: "contact" }
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md">
            <div className="container flex flex-row p-2 md:px-5 items-center justify-between">
                <a className="flex items-center" href="/">
                    <Image src='/logo.png' alt="App Spark Logo" width={200} height={200}></Image>
                </a>
                {/* Desktop Nav */}
                <nav className="hidden md:ml-auto md:mr-auto custom-subheading md:flex gap-8 flex-wrap items-center justify-evenly">
                    {navItems.map((link, index) => (
                        <Link key={index} href={`#${link.target}`} className="nav-item mr-5 hover:text-gray-900">{link.title}</Link>
                    ))}
                </nav>
                <div className="hidden md:inline-flex items-center border-0 py-1 px-3 focus:outline-none mt-4 md:mt-0">
                    <a href="#" className="custom-button">Contact Us</a>
                </div>
                {/* Mobile Nav */}
                <div className="md:hidden mr-2">
                    <Sheet>
                        <SheetTrigger>
                            <HiMenuAlt3 className="text-3xl" />
                        </SheetTrigger>
                        <SheetContent className="bg-custombg">
                            <nav className="py-8 flex gap-8 flex-col custom-subheading items-center text-base justify-center">
                                <Image src='/logo.png' alt="App Spark Logo" width={150} height={150}></Image>
                                {navItems.map((link, index) => (
                                    <SheetClose asChild key={index}>
                                        <Link href={`#${link.target}`} className="nav-item">{link.title}</Link>
                                    </SheetClose>
                                ))}
                                <a href="#" className="custom-button">Contact Us</a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

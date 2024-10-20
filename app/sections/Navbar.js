'use client'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"

import { useEffect } from 'react';
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function NavBar() {

    const navItems = new Map([
        ["About Us", "about"],
        ["Services", "services"],
        ["Our Projects", "projects"],
        ["Our Team", "team"],
        ["Contact Us", "contact"]
    ]);

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);

        const navMenuItems = document.querySelectorAll(".nav-item");
        navMenuItems.forEach((nav) => {
            nav.addEventListener("click", () => {
                const target = nav.innerText;
                console.log(target);
                gsap.to(window, { duration: 1, scrollTo: { y: `#${navItems.get(target)}`, offsetY: 60 } });
            });
        });

        // Cleanup event listeners on component unmount
        return () => {
            navMenuItems.forEach((nav) => {
                nav.removeEventListener("click", () => { });
            });
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md">
            <div className="container flex flex-row p-2 md:px-5 items-center justify-between">
                <a className="flex items-center" href="/">
                    <Image src='/logo.png' alt="App Spark Logo" width={200} height={200}></Image>
                </a>
                {/* Desktop Nav */}
                <nav className="hidden md:ml-auto md:mr-auto custom-subheading md:flex gap-8 flex-wrap items-center justify-evenly">
                    {Array.from(navItems, ([key]) => (
                        <div key={key} className="nav-item cursor-pointer mr-5 hover:text-gray-900">{key}</div>
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
                                {Array.from(navItems, ([key]) => (
                                    <SheetClose asChild key={key}>
                                        <div onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: `#${navItems.get(key)}`, offsetY: 60 } })}>{key}</div>
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
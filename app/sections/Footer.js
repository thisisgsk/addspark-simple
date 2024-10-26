'use client'

import { FaPhone, FaMinus, FaLocationDot, FaFacebook, FaSquareInstagram, FaSquareXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";

export default function Footer() {

    const navItems = new Map([
        ["About Us", "about"],
        ["Services", "services"],
        ["Our Projects", "projects"],
        ["Our Team", "team"],
        ["Contact Us", "contact"]
    ]);

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    return (
        <section className="container">
            <div className="text-white bg-customsecondary mx-auto p-4 gap-4 flex flex-col justify-between items-center">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-start px-8 py-8 md:px-32 mx-auto">
                    <div className="flex flex-col gap-2 justify-center items-start flex-1">
                        <Link href="#nav" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Image src="/whitelogo.png" width={200} height={80} alt="Add Spark Logo" />
                        </Link>
                        <p className="font-extralight text-left">
                            Ready to ignite your brand? At Add Spark, we craft world-class websites, execute laser-focused campaigns, and deliver unmatched PR strategies to make your brand shine. Let&apos;s add the spark your brand needs to stand out in the marketplace!
                        </p>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col justify-start items-start md:pl-24 md:pt-4">
                            <h3 className="text-2xl">Explore</h3>
                            <FaMinus />
                            {Array.from(navItems, ([key]) => (
                                <div
                                    onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: `#${navItems.get(key)}`, offsetY: 60 } })}
                                    key={`${key}__footer`}
                                    className="nav-item cursor-pointer"
                                >
                                    {key}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start flex-1 md:pt-4">
                        <h3 className="text-2xl">Contact</h3>
                        <FaMinus />
                        <div className="flex items-center gap-2"><FaPhone /> +91 9908613713</div>
                        <div className="flex items-center gap-2"><IoMail /> addsparksolutions@gmail.com</div>
                        <div className="flex items-start gap-2"><FaLocationDot className="text-3xl" /> Flat No - 4B CKR Residency, Habsiguda, Hyderabad, Telangana 500007</div>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col justify-start items-start md:pl-24 md:pt-4">
                            <h3 className="text-2xl">Follow Us</h3>
                            <FaMinus />
                            <div className="flex gap-4 pt-2">
                                <Link href="https://www.facebook.com/addsparksol/" target="_blank" color="secondary-foreground"><FaFacebook className="text-2xl" /></Link>
                                <Link href="https://www.instagram.com/addsparksol/" target="_blank" color="secondary-foreground"><FaSquareInstagram className="text-2xl" /></Link>
                                <Link href="https://x.com/add_sparksol" target="_blank" color="secondary-foreground"><FaSquareXTwitter className="text-2xl" /></Link>
                                <Link href="https://www.linkedin.com/company/add-spark-solutions-pvt-ltd/" target="_blank" color="secondary-foreground"><FaLinkedin className="text-2xl" /></Link>
                                <Link href="https://www.youtube.com/@addsparksolutions" target="_blank" color="secondary-foreground"><FaYoutube className="text-2xl" /></Link>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="bg-white h-[1px] w-[90%]"></div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-96 mb-6">
                    <p className="text-sm font-extralight text-center px-4 md:px-0">Copyright © 2024 Add Spark Solutions Pvt. Ltd. All rights reserved.</p>
                    <p className="text-sm font-extralight text-center">Designed by Add Spark Solutions</p>
                </div>
            </div>
        </section>
    );
}
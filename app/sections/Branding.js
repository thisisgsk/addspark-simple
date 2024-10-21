'use client'

import { motion } from "framer-motion";
import { FaBuildingUser, FaImagePortrait, FaPeopleGroup } from "react-icons/fa6";
import { SiGoogleads, SiAdobephotoshop, SiYoutubeshorts } from "react-icons/si";
import { MdContentPasteSearch, MdSocialDistance } from "react-icons/md";

export default function Branding() {
    return (
        <section className="container pb-16">
            <div className="mx-auto flex px-4 py-16 gap-4 flex-col justify-between items-center text-center">
                <h2 className='text-3xl md:text-4xl md:max-w-[50%] custom-subheading'>Ready to Elevate Your Brand with Powerful Content Strategies?</h2>
                <p className="md:max-w-[60%]">
                    Founded on the principle of delivering excellence, we specialize in crafting cutting-edge websites,
                    executing targeted campaigns, and offering top-tier PR services that get real results.
                    Our approach is a blend of creativity and strategy, ensuring that every project we touch is not only visually stunning but also optimized for performance and growth.
                </p>
            </div>
            <div className="hidden md:flex flex-col md:flex-row justify-between items-stretch gap-16 px-24">
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="flex flex-1 flex-col justify-between items-end gap-8">
                    <h3 className="text-xl flex flex-col gap-2 justify-center items-end">
                        <FaBuildingUser className="text-4xl text-customsecondary" />
                        Brand Building
                    </h3>
                    <h3 className="text-xl flex flex-col gap-2 justify-center items-end">
                        <FaImagePortrait className="text-4xl text-customsecondary" />
                        Personal Image Building
                    </h3>
                    <h3 className="text-xl flex flex-col gap-2 justify-center items-end">
                        <SiGoogleads className="text-4xl text-customsecondary" />
                        Ads Management
                    </h3>
                    <h3 className="text-xl flex flex-col gap-2 justify-center items-end">
                        <FaPeopleGroup className="text-4xl text-customsecondary" />
                        Leads Generation
                    </h3>
                </motion.div>
                <motion.img
                    initial={{ scale: 0.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    src="/branding.svg" alt="Digital Marketing" width={600} height={600} />
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="flex flex-1 flex-col justify-between items-start gap-8"
                >
                    <h3 className="text-xl flex flex-col gap-2 justify-center items-start">
                        <MdContentPasteSearch className="text-4xl text-customsecondary" />
                        Content Strategy
                    </h3>
                    <h3 className="text-xl flex flex-col gap-2 justify-center items-start">
                        <SiAdobephotoshop className="text-4xl text-customsecondary" />
                        Graphic Designing
                    </h3>
                    <h3 className="text-xl flex flex-col gap-2 justify-center items-start">
                        <MdSocialDistance className="text-4xl text-customsecondary" />
                        Social Media Management
                    </h3>
                    <h3 className="text-xl flex flex-col gap-2 justify-center items-start">
                        <SiYoutubeshorts className="text-4xl text-customsecondary" />
                        Reels & Shorts
                    </h3>
                </motion.div>
            </div>
            <div className="flex-1 md:hidden">
                <motion.img
                    initial={{ scale: 0.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    src="/branding.svg" alt="Digital Marketing" width={600} height={600} />
            </div>
            <div className="flex md:hidden items-stretch justify-center gap-3">
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="flex flex-1 flex-col justify-between items-end gap-8">
                    <h3 className="text-md flex flex-col gap-2 justify-center items-end">
                        <FaBuildingUser className="text-4xl text-customsecondary" />
                        Brand Building
                    </h3>
                    <h3 className="text-md flex flex-col gap-2 justify-center items-end">
                        <FaImagePortrait className="text-4xl text-customsecondary" />
                        Personal Image Building
                    </h3>
                    <h3 className="text-md flex flex-col gap-2 justify-center items-end">
                        <SiGoogleads className="text-4xl text-customsecondary" />
                        Ads Management
                    </h3>
                    <h3 className="text-md flex flex-col gap-2 justify-center items-end">
                        <FaPeopleGroup className="text-4xl text-customsecondary" />
                        Leads Generation
                    </h3>
                </motion.div>
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="flex flex-1 flex-col justify-between items-start gap-8">
                    <h3 className="text-md flex flex-col gap-2 justify-center items-start">
                        <MdContentPasteSearch className="text-4xl text-customsecondary" />
                        Content Strategy
                    </h3>
                    <h3 className="text-md flex flex-col gap-2 justify-center items-start">
                        <SiAdobephotoshop className="text-4xl text-customsecondary" />
                        Graphic Designing
                    </h3>
                    <h3 className="text-md flex flex-col gap-2 justify-center items-start">
                        <MdSocialDistance className="text-4xl text-customsecondary" />
                        Social Media Management
                    </h3>
                    <h3 className="text-md flex flex-col gap-2 justify-center items-start">
                        <SiYoutubeshorts className="text-4xl text-customsecondary" />
                        Reels & Shorts
                    </h3>
                </motion.div>
            </div>
        </section>
    );
}
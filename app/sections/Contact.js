'use client'

import React from "react";
import { motion } from "framer-motion";
import { sendGTMEvent } from '@next/third-parties/google';
import { toast } from "sonner";

export default function Contact() {

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    async function handleSubmit(e) {
        e.preventDefault();
        if (name && phone && email && message) {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "089dd47b-2c20-4eb2-bde7-be38a85e3433",
                    name,
                    phone,
                    email,
                    message,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setName('');
                setPhone('');
                setEmail('');
                setMessage('');
                toast("Thanks for reaching out!", {
                    description: "We'll be in touch soon to ignite something amazing!",
                });
            }
        }
    };

    return (
        <section id="contact">
            <div className="container mx-auto flex px-4 py-16 gap-8 flex-col justify-center items-stretch">
                <h2 className='text-4xl md:text-5xl text-center custom-heading font-semibold'>Get In Touch</h2>
                <p className="md:max-w-[60%] text-center mx-auto">
                    Ready to spark something great? Reach out to us today and let&apos;s turn your brand vision into reality!
                </p>
                <motion.form
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 w-full md:w-[30%] mx-auto bg-customsecondary py-8 p-4 shadow-lg shadow-black">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="custom-input"
                        onChange={handleNameChange}
                        value={name}
                        required
                    />
                    <input
                        type="phone"
                        placeholder="Contact No."
                        className="custom-input"
                        onChange={handlePhoneChange}
                        value={phone}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="custom-input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <textarea
                        name=""
                        className="custom-input"
                        placeholder="Message"
                        value={message}
                        onChange={handleMessageChange}
                    >
                    </textarea>
                    <button type="submit" className="custom-button" onPress={() => {
                        sendGTMEvent({ action: 'click', category: 'button', label: 'submit' });
                    }}>Contact Us</button>
                </motion.form>
            </div>
        </section>
    );
}
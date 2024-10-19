'use client'

import React from "react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Hero() {

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
            var element = document.getElementById('heroclose');
            element.click();

            // const response = await fetch("https://api.web3forms.com/submit", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            //     body: JSON.stringify({
            //         access_key: "6f2b68f8-34dd-474a-b824-2f8aaf1b4ecc",
            //         name,
            //         phone,
            //         email,
            //         message,
            //     }),
            // });
            // const result = await response.json();
            // if (result.success) {
            //     setSubmitted(true);
            //     setName('');
            //     setPhone('');
            //     setEmail('');
            //     setMessage('');
            //     setTimeout(() => {
            //         setSubmitted(false);
            //     }, 3000)
            // }
        }
    };

    return (
        <section className="text-customtext md:px-16 flex flex-col md:flex-row justify-center items-center">
            <div className="container mx-auto flex flex-1 px-5 py-16 flex-col justify-center items-center md:items-start gap-8">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start gap-4 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold custom-heading">
                        Boost Online Visiblity
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold custom-heading">
                        With <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#265D9C] to-[#0BC252]">Add Spark</span>
                    </h1>
                    <p className="leading-loose">
                        <span className="font-semibold">Ready to ignite your brand?</span> At Add Spark, we craft world-class websites, execute laser-focused campaigns, and deliver unmatched PR strategies to make your brand shine. Let&apos;s add the spark your brand needs to stand out in the marketplace!
                    </p>
                    <div className="inline-flex">
                        <Dialog>
                            <DialogTrigger asChild>
                                <a href="#" className="custom-button">Contact Us</a>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg">
                                <DialogTitle className="text-center text-3xl">Contact Us</DialogTitle>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full mx-auto bg-customsecondary py-8 p-4 shadow-lg shadow-black">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="custom-input"
                                        onChange={handleNameChange}
                                        required
                                    />
                                    <input
                                        type="phone"
                                        placeholder="Contact No."
                                        className="custom-input"
                                        onChange={handlePhoneChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="custom-input"
                                        onChange={handleEmailChange}
                                    />
                                    <textarea
                                        name=""
                                        className="custom-input"
                                        placeholder="Message"
                                        onChange={handleMessageChange}
                                    >
                                    </textarea>
                                    <button type="submit" className="custom-button">Contact Us</button>
                                    <DialogFooter className="sm:justify-center">
                                        <DialogClose asChild>
                                            <div id="heroclose"></div>
                                        </DialogClose>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="/heropic.svg" alt="Digital Marketing" width={800} height={800} />
            </div>
        </section >
    );
}

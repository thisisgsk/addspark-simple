'use client'
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="text-customtext md:px-16 flex flex-col md:flex-row justify-center items-center">
            <div className="container mx-auto flex flex-1 px-5 py-16 flex-col justify-center items-center md:items-start gap-8">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start gap-4 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Boost Online Visiblity
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        With <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#265D9C] to-[#0BC252]">Add Spark</span>
                    </h1>
                    <p className="leading-loose">
                        <span className="font-bold">Ready to ignite your brand?</span> At Add Spark, we craft world-class websites, execute laser-focused campaigns, and deliver unmatched PR strategies to make your brand shine. Let&apos;s add the spark your brand needs to stand out in the marketplace!
                    </p>
                    <div className="inline-flex">
                        <a href="#" className="custom-button">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="/heropic.svg" alt="Digital Marketing" width={800} height={800} />
            </div>
        </section>
    );
}

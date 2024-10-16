import { FaAnglesDown } from "react-icons/fa6";

export default function About() {
    return (
        <section className="container">
            <div className="text-white bg-customsecondary mx-auto px-4 py-16 gap-4 flex flex-col justify-center items-center">
                <div className="text-2xl custom-subheading">
                    Our mission is simple
                </div>
                <div className="text-2xl animate-bounce">
                    <FaAnglesDown />
                </div>
                <div className="text-4xl uppercase custom-heading font-bold md:max-w-[60%] text-center leading-relaxed">
                    add spark to your brand&apos;s journey and make it stand out
                </div>
            </div>
            <div className="flex flex-col md:flex-row px-4 md:px-16 py-12">
                <div className="flex-1 flex justify-center items-center px-4 md:px-0">
                    <img src="/about.svg" alt="Digital Marketing" width={800} height={800} />
                </div>
                <div className="container mx-auto flex flex-1 px-5 py-4 flex-col justify-center items-center md:items-start gap-8">
                    <div className="flex flex-col justify-center items-center md:items-start text-center text-xl md:text-start gap-4 md:max-w-2xl">
                        <h3 className="text-3xl font-bold custom-subheading">Who We Are</h3>
                        <p><span className="text-2xl font-semibold">At Add Spark,</span> we are a team of passionate innovators, creators, and strategists who are dedicated to bringing brands to life. We believe that every brand has a unique story to tell,
                            and our mission is to amplify that story,
                            making it resonate with the right audience in powerful ways.</p>
                        <p>
                            Founded on the principle of delivering excellence, we specialize in crafting cutting-edge websites,
                            executing targeted campaigns, and offering top-tier PR services that get real results.
                            Our approach is a blend of creativity and strategy, ensuring that every project we touch is not only visually stunning but also optimized for performance and growth.
                        </p>
                        <h3 className="text-3xl font-bold custom-subheading">Our Values</h3>
                        <div className="flex justify-between items-stretch gap-2 w-full text-lg md:text-xl">
                            <div className="text-white bg-customsecondary text-center p-2 py-4 shadow-sm shadow-black w-full flex-1">
                                Innovation
                            </div>
                            <div className="text-white bg-customsecondary text-center p-2 py-4 shadow-sm shadow-black w-full flex-1">
                                Quality
                            </div>
                        </div>
                        <div className="flex justify-between items-stretch gap-2 w-full text-lg md:text-xl">
                            <div className="text-white bg-customsecondary text-center p-2 py-4 shadow-sm shadow-black w-full flex-1">
                                Passion
                            </div>
                            <div className="text-white bg-customsecondary text-center p-2 py-4 shadow-sm shadow-black w-full flex-1">
                                Customer Success
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
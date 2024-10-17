import { AspectRatio } from "@/components/ui/aspect-ratio";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

import Image from "next/image";

export default function Clients() {

    const clientLogos = [
        { path: "/clients/aura.png" },
        { path: "/clients/csi.png" },
        { path: "/clients/dr3v.png" },
        { path: "/clients/heartwise.png" },
        { path: "/clients/politicalimage.png" },
        { path: "/clients/puro.png" },
        { path: "/clients/zerotohero.png" },
    ]

    return (
        <section>
            <div className="container mx-auto flex px-4 py-16 gap-4 flex-col justify-center items-stretch">
                <h2 className='text-4xl md:text-5xl text-center custom-heading font-semibold'>Our Clients</h2>
                <p className="md:max-w-[60%] text-center mx-auto">
                    Our clients are the heart of everything we do. From startups to established brands, we&apos;ve partnered with
                    businesses across industries to deliver creative solutions that drive success. Join our growing list of
                    satisfied clients and let&apos;s create something extraordinary together!
                </p>
                <InfiniteSlider duration={64} durationOnHover={100} gap={48} className="pt-8 max-w-[90%] md:max-w-[70%] mx-auto gradient-mask-r-[transparent,rgba(0,0,0,1.0)_20%,rgba(0,0,0,1.0)_80%,transparent]">
                    {clientLogos.map(logo => (
                        <div key={logo.path} className="w-48">
                            <AspectRatio ratio={16 / 9} className="bg-muted">
                                <Image
                                    src={`${logo.path}`}
                                    alt="Photo by Drew Beamer"
                                    fill
                                    className="h-full w-full object-cover opacity-90"
                                />
                            </AspectRatio>
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    );
}
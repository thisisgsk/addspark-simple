import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio"

const MemberCard = ({ imageUrl, name, designation }) => {
    return (
        <div className="w-[90%] flex flex-col mx-auto relative text-white">
            <AspectRatio ratio={3 / 4}>
                <Image src={`${imageUrl}`} alt="Team Member" fill className="object-cover" />
            </AspectRatio>
            <h3 className="bg-customsecondary text-sm leading-none p-2 absolute bottom-0 left-0">
                <span className="leading-tight text-[1rem] md:text-[1.25rem]">{name}</span>
                <br />
                <span className="text-xs">{designation}</span>
            </h3>
        </div >
    );
};

export default MemberCard;
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio"

const MemberCard = ({ imageUrl, name, designation }) => {
    return (
        <div className="w-[90%] flex flex-col mx-auto relative text-white">
            <AspectRatio ratio={3 / 4}>
                <Image src={`${imageUrl}`} alt="Image" fill className="object-cover" />
            </AspectRatio>
            <h4 className="bg-customprimary text-xs md:text-base p-1 md:p-2 md:px-4 absolute top-0 right-0">{designation}</h4>
            <h3 className="bg-customsecondary text-sm md:text-2xl p-2 px-4 absolute bottom-0 left-0">{name}</h3>
        </div >
    );
};

export default MemberCard;
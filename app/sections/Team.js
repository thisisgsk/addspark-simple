import MemberCard from "@/components/ui/membercard";

export default function Team() {
    return (
        <section id="team">
            <div className="container mx-auto flex px-4 py-16 gap-4 flex-col justify-center items-stretch">
                <h2 className='text-4xl md:text-5xl text-center custom-heading font-semibold'>Meet The Team</h2>
                <p className="md:max-w-[60%] text-center mx-auto">
                    Meet the creative minds behind Add Spark! Our talented team of strategists, designers, and
                    innovators work together to bring your brand&apos;s vision to life. With a passion for excellence and a
                    commitment to results, we&apos;re here to make your brand shine.
                </p>
                <div className="w-1/2 mx-auto flex-none md:hidden">
                    <MemberCard
                        imageUrl={'/devendar.jpeg'}
                        name={'Devendar M'}
                        designation={'Founder & CEO'}
                    ></MemberCard>
                </div>
                <div className="flex flex-wrap md:px-64 justify-center">
                    <div className="w-1/2 hidden flex-none md:block md:w-1/3 p-2">
                        <MemberCard
                            imageUrl={'/devendar.jpeg'}
                            name={'Devendar M'}
                            designation={'Founder & CEO'}
                        ></MemberCard>
                    </div>
                    <div className="flex-none w-1/2 md:w-1/3 p-2">
                        <MemberCard
                            imageUrl={'/murali.jpeg'}
                            name={'Murali Krishna'}
                            designation={'COO'}
                        ></MemberCard>
                    </div>
                    <div className="flex-none w-1/2 md:w-1/3 p-2">
                        <MemberCard
                            imageUrl={'/karthik.jpeg'}
                            name={'Karthik'}
                            designation={'CTO'}
                        ></MemberCard>
                    </div>
                    <div className="flex-none w-1/2 md:w-1/3 p-2">
                        <MemberCard
                            imageUrl={'/shiva.jpeg'}
                            name={'Shiva'}
                            designation={'CFO'}
                        ></MemberCard>
                    </div>
                    <div className="flex-none w-1/2 md:w-1/3 p-2">
                        <MemberCard
                            imageUrl={'/sharan.jpeg'}
                            name={'Sai Sharan'}
                            designation={'PMO'}
                        ></MemberCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
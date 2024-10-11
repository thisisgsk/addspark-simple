import MemberCard from "@/components/ui/membercard";

export default function Team() {
    return (
        <section>
            <div className="container mx-auto flex px-4 py-16 gap-4 flex-col justify-center items-stretch">
                <h2 className='text-4xl md:text-5xl text-center'>Meet The Team</h2>
                <p className="md:max-w-[60%] text-center mx-auto">
                    Meet the creative minds behind Add Spark! Our talented team of strategists, designers, and
                    innovators work together to bring your brand's vision to life. With a passion for excellence and a
                    commitment to results, we're here to make your brand shine.
                </p>
                <div className="flex flex-col gap-8 md:px-64">
                    <div className='flex flex-col pt-8 md:flex-row gap-8 md:px-4 justify-between items-stretch text-center'>
                        <MemberCard
                            imageUrl={'/boy.jpg'}
                            name={'Devendar M'}
                            designation={'Founder & CEO'}
                        ></MemberCard>
                        <MemberCard
                            imageUrl={'/boy.jpg'}
                            name={'Murali Krishna'}
                            designation={'COO'}
                        ></MemberCard>
                        <MemberCard
                            imageUrl={'/boy.jpg'}
                            name={'Karthik'}
                            designation={'CTO'}
                        ></MemberCard>
                    </div>
                    <div className='flex flex-col pt-8 md:flex-row gap-8 md:px-4 justify-between items-stretch text-center'>
                        <MemberCard
                            imageUrl={'/boy.jpg'}
                            name={'Shiva'}
                            designation={'CFO'}
                        ></MemberCard>
                        <MemberCard
                            imageUrl={'/boy.jpg'}
                            name={'Sai Sharan'}
                            designation={'PMO'}
                        ></MemberCard>
                        <MemberCard
                            imageUrl={'/girl.jpg'}
                            name={'Bindhu'}
                            designation={'CHR'}
                        ></MemberCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
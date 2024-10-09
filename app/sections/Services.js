import ServiceCard from '@/components/ui/servicecard';

export default function Services() {
    return (
        <section className="text-white">
            <div className="container bg-customprimary mx-auto flex px-4 py-16 gap-4 flex-col justify-center items-center">
                <h2 className='text-4xl md:text-5xl'>Our Services</h2>
                <div className="flex flex-col gap-4">
                    <div className='flex flex-col pt-8 md:flex-row gap-4 md:px-4 justify-between items-stretch text-center text-black'>
                        <ServiceCard
                            iconCode={'kdduutaw'}
                            title={'Social Media Marketing'}
                            description={'We create tailored social media strategies that engage audiences and build your online presence. Our expert team crafts compelling content and fosters interactions that grow your brand\'s influence.'}
                        ></ServiceCard>
                        <ServiceCard
                            iconCode={'rpviwvwn'}
                            title={'Website Development'}
                            description={'We build world-class websites that not only look stunning but are also optimized for performance and user experience. Our development team ensures your digital presence is responsive, intuitive, and aligned with your brand goals.'}
                        ></ServiceCard>
                        <ServiceCard
                            iconCode={'wjyqkiew'}
                            title={'SEM (Search Engine Marketing)'}
                            description={'At Add Spark, we offer top-tier SEM services that maximize your brand’s visibility on search engines. Our data-driven strategies and paid advertising campaigns ensure you stay ahead of competitors.'}
                        ></ServiceCard>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 md:px-4 justify-between items-stretch text-center text-black'>
                        <ServiceCard
                            iconCode={'fcyboqbm'}
                            title={'Analytics'}
                            description={'We deliver in-depth analytics to optimize your digital media strategy. Our cutting-edge analysis ensures you gain actionable insights that enhance performance and drive better results for your campaigns.'}
                        ></ServiceCard>
                        <ServiceCard
                            iconCode={'ozlkyfxg'}
                            title={'Email Marketing'}
                            description={'Add Spark offers precision-driven email marketing campaigns that build lasting relationships and convert leads into loyal customers. Our personalized approach ensures maximum engagement and ROI.'}
                        ></ServiceCard>
                        <ServiceCard
                            iconCode={'pfvaixkr'}
                            title={'Branding'}
                            description={'We excel in creating a consistent and memorable brand identity through social media. From unique visuals to strategic content, we ensure your brand stands out and builds strong connections with its audience.'}
                        ></ServiceCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
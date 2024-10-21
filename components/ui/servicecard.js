'use client'

import { motion } from "framer-motion";

const ServiceCard = ({ iconCode, title, description }) => {
    return (
        <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="bg-white p-4 gap-4 flex flex-col justify-center items-center w-[90%] mx-auto md:w-full shadow-[8px_8px_0px_-2px_rgba(0,0,0,0.75)]"
        >
            <lord-icon
                src={`https://cdn.lordicon.com/${iconCode}.json`}
                trigger="in"
                delay="500"
                stroke="bold"
                state={(title == 'Analytics') ? "in-growth" : "in-reveal"}
                colors={{ primary: '#242424', secondary: '#c71f16' }}
                style={{ width: '80px', height: '80px' }}
            ></lord-icon>
            <h3 className="text-2xl font-bold custom-subheading">{title}</h3>
            <p>{description}</p>
        </motion.div>
    );
};

export default ServiceCard;
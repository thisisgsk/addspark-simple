const ServiceCard = ({ iconCode, title, description }) => {
    return (
        <div className="bg-white p-4 gap-4 flex flex-col justify-center items-center w-full shadow-[8px_8px_0px_-2px_rgba(0,0,0,0.75)]">
            <lord-icon
                src={`https://cdn.lordicon.com/${iconCode}.json`}
                trigger="in"
                delay="500"
                stroke="bold"
                state={(title == 'Analytics') ? "in-growth" : "in-reveal"}
                colors={{ primary: '#242424', secondary: '#c71f16' }}
                style={{ width: '80px', height: '80px' }}
            ></lord-icon>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;
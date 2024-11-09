

const CommonHeading = ({title, subtitle}) => {
    return (
        <div>
            <h1 className="text-6xl text-bold text-center pt-6" >{title}</h1>
            <p className="text-base text-center pt-4 px-10">{subtitle}</p>
        </div>
    );
};

export default CommonHeading;
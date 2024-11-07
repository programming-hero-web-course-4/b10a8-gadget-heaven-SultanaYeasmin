

const CommonHeading = ({title, subtitle}) => {
    return (
        <div>
            <h1 className="text-6xl text-bold text-center" >{title}</h1>
            <p className="text-base text-center">{subtitle}</p>
        </div>
    );
};

export default CommonHeading;
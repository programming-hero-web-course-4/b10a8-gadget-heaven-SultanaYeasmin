

const CommonHeading = ({title, subtitle}) => {
    return (
        <div>
            <h1 className="text-6xl text-bold" >{title}</h1>
            <p className="text-base">{subtitle}</p>
        </div>
    );
};

export default CommonHeading;
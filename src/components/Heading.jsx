// import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl lg:text-5xl text-bold px-20 text-center text-white" >{title}</h1>
            <p className="text-base text-center mt-6 mb-8 text-white px-10">{subtitle}</p>
        </div>
    );
};

export default Heading;
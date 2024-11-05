// import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl text-bold px-20 text-center" >{title}</h1>
            <p className="text-base text-center mt-6 mb-8">{subtitle}</p>
        </div>
    );
};

export default Heading;
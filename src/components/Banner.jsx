import banner from "./../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="relative container mx-auto flex justify-center">
            <div className="absolute top-[80px]">
                <img className="w-[800px] h-[500px] rounded-3xl outline outline-2 outline-offset-8 outline-white" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;
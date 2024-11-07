import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto py-10">
            <h2 className="text-[60px] text-center font-extrabold text-red-400">Ooops! <br /> Page is not found</h2>
            <p className="text-center py-4 text-red-400 text-3xl">Status: 404</p>
            <p className="text-center py-4 text-slate-400 text-sm">Sorry! The page you are looking for does not exist. It might have been moved or deleted.</p>
           <div className="flex justify-center mt-6 "> <button className="btn btn-wide text-white bg-black" onClick={()=>navigate('/')}>back to home</button></div>
        </div>
    );
};

export default ErrorPage;
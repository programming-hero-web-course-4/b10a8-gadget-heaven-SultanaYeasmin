import { useNavigate } from "react-router-dom";
import DocumentTitle from "../utilities/DocumentTitle";

const ErrorPage = () => {
    const navigate = useNavigate();
    DocumentTitle("GadgetHeaven_Error_Page");
    return (
        <div className="container mx-auto py-10 bg-purple-200 min-h-svh pt-[200px]">
            <h2 className="text-[60px] text-center font-extrabold text-purple-600">Ooops! <br /> Page is not found</h2>
            <p className="text-center pt-4 text-purple-600 text-3xl">Status: 404</p>
            <p className="text-center py-4 text-purple-600 text-sm">Sorry! The page you are looking for does not exist. It might have been moved or deleted.</p>
           <div className="flex justify-center mt-2"> <button className="btn btn-wide text-white bg-purple-600 rounded-3xl" onClick={()=>navigate('/')}>Back to home</button></div>
        </div>
    );
};

export default ErrorPage;

import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col-reverse lg:flex-row  items-center justify-center  bg-gradient-to-r from-[#e879f9] to-[#fda4af] "  >

            <div>

                <img src="https://i.ibb.co/7nsVmB2/Premium-Vector-Cute-astronaut-sleeping-on-bread-space-cartoon-vector-icon-illustration-science-food.jpg" className="rounded-full lg:w-[500px] mt-10" />

            </div>
            <div className="lg:ml-8 text-center">
                <h2 className="text-7xl lg:text-9xl text-[#831843] font-extrabold">404</h2>
                <h2 className="text-5xl lg:text-7xl text-[#831843] font-extrabold">Page Not Found</h2>
                <Link to='/' className="btn mt-10 text-[#831843] font-extrabold bg-[#ddd6fe]">Go Back to home</Link></div>
        </div>
    );
};

export default ErrorPage;
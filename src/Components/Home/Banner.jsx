import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/N13yqmx/download.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Assignment Avengers</h1>
                    <p className="mb-5 text-2xl font-bold">Powering Success Together</p>
                    <Link to='/assignments'><button className="btn bg-gradient-to-r from-[#e879f9] to-[#fda4af]">Explore Assignments</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
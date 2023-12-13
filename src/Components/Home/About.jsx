

const About = () => {
    return (
        <div className="my-40">
            <h2 className="text-5xl text-center font-bold mb-10">About Us</h2>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/hVq2Cjh/12.jpg)' }}>
                <div className="hero-overlay bg-[#e879f9]  bg-opacity-60"></div>
                <div className="hero-content text-center  text-black">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-3xl font-bold fancy">Hello Everyone..</h1>
                        <p className="mb-5  text-xl ">Welcome to Assignment Avengers, where learning meets collaboration! Our journey began with a shared passion for fostering a dynamic online learning community among friends. Motivated by the desire to create a seamless platform for group study, we embarked on the exciting adventure of developing this space. Our diverse team brings together experts in education, technology, and design, united by the belief that collaborative learning is the key to academic success. Assignment Avengers is more than just a website; it's a hub for shared knowledge, interactive assignments, and meaningful connections. As we continue to evolve, our commitment to providing an inclusive and innovative learning environment remains unwavering. Join us on this educational journey, and let's make learning together an enriching experience for everyone!</p>


                        <div className="flex justify-center ">
                            <button className="btn bg-gradient-to-r from-[#e879f9] to-[#fda4af] text-[#265073]  fancy text-2xl">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
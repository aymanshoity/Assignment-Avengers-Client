

const Feature = () => {
    return (
        <div className="bg-gradient-to-r from-[#e879f9] to-[#fda4af] py-20">
            <h2 className="text-5xl text-center font-bold mb-10">Discover Study Together</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mx-6 md:mx-10 lg:mx-20 ">
                <div className="card bg-gradient-to-t from-black to-[#172554]  shadow-xl">
                    <figure><img className="w-[100px] h-[100px] mt-4" src="https://i.ibb.co/MPJNJLZ/partners.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white text-center">Collaborative Learning Spaces</h2>

                    </div>
                </div>
                {/* card2 */}
                <div className="card bg-gradient-to-t from-black to-[#172554]  shadow-xl">
                    <figure><img className="w-[100px] h-[100px] mt-4" src="https://i.ibb.co/thgpSMJ/deadline.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white text-center">Assignment Tracking and Manageme</h2>

                    </div>
                </div>
                {/* card-3 */}
                <div className="card bg-gradient-to-t from-black to-[#172554]  shadow-xl">
                    <figure><img className="w-[100px] h-[100px] mt-4" src="https://i.ibb.co/cLnfYrP/peer-review.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white text-center">Peer Feedback and Review</h2>

                    </div>
                </div>
                {/* card-4 */}
                <div className="card bg-gradient-to-t from-black to-[#172554]  shadow-xl">
                    <figure><img className="w-[100px] h-[100px] mt-4" src="https://i.ibb.co/W25qdZ6/good-feedback.png" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title text-white ">Peer Evaluation </h2>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feature;
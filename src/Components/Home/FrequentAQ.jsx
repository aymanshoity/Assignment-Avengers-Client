

const FrequentAQ = () => {
    return (
        <div className="bg-gradient-to-r from-[#e879f9] to-[#fda4af] p-20">

            <h2 className="text-5xl text-center font-bold mb-10">FAQ</h2>
            <div className="collapse collapse-arrow bg-gradient-to-b from-black to-[#172554] my-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-white">
                What is Assignment Avengers? What is it for and what can I do here?
                </div>
                <div className="collapse-content  text-white">
                    <p>Assignment Avengers is a study community and a virtual study space that you can access 24/7 from anywhere. When part of our community you will be able to evaluate himself through assignments and share review of the assignments with other students .</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gradient-to-b from-black to-[#172554] my-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-white">
                    I would like to join. How do I do that?
                </div>
                <div className="collapse-content text-white">
                    <p>Perfect, you are welcome in the community!Please register and login and continue with the assignments</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gradient-to-b from-black to-[#172554] my-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-white">
                    Are there any regular events or rooms for group discussions, etc?
                </div>
                <div className="collapse-content text-white">
                    <p>Yes! By being part of the community you will have access to a variety of events, from 🧘mindfulness sessions to 📚 study tips bootcamps.</p>
                </div>
            </div>
        </div>
    );
};

export default FrequentAQ;
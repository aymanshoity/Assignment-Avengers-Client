
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"



const Testimonial = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 15,
        },
    })
    return (
        <div className='my-40 lg:w-[1280px] mx-auto w-[400px] md-[700px]'>
            <h2 className="text-5xl text-center font-bold mb-10">Look, What People Say About Us!!</h2>
            <div ref={sliderRef} className="keen-slider ">
                <div className="keen-slider__slide number-slide1 bg-gradient-to-r from-[#e879f9] to-[#fda4af] p-10 rounded-lg">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Awesome Community</h1>
                        <p className="mb-5">"As a chronic procrastinator, this community really helps me motivate myself to get my assignments done. Has cool leaderboards, timers, and study tips. It’s a really large community so it’s pretty easy to meet people, too"</p>
                        
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 bg-gradient-to-r from-[#e879f9] to-[#fda4af] p-10 rounded-lg">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Assignment Avengers is great!!!</h1>
                        <p className="mb-5">"Study Together is perfect no flaws no nothing. It gives me a purpose and before this I did not study a lot now I do. Thanks Assignment Avengers"</p>
                        
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 bg-gradient-to-r from-[#e879f9] to-[#fda4af] p-10 rounded-lg">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Thank You!!</h1>
                        <p className="mb-5">"Yesterday I completed my one year in this community. I feel so amazed that I have so many study hours without even noticing them, just cuz I was so focused with my study pals to achieve what I wanted to!!"</p>
                        
                    </div>
                </div>
                
                {/* 2 */}
                <div className="keen-slider__slide number-slide1 bg-gradient-to-r from-[#e879f9] to-[#fda4af] p-10 rounded-lg">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Productivity Booster</h1>
                        <p className="mb-5">"I have never been so focused and productive when studying by myself before. I can study with someone basically 24/7 if I really wanted too. It has been an amazing help! 💜 Thanks Assignment Avengers!"</p>
                        
                    </div>
                </div>
                {/* 3 */}
                <div className="keen-slider__slide number-slide1 bg-gradient-to-r from-[#e879f9] to-[#fda4af] p-10 rounded-lg">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Goals</h1>
                        <p className="mb-5">"I’ve been a part of it for probably a little over a month and I’ve noticed how it’s improved my ability to stay focused. Since everyone is also studying in the call and working hard, I feel obliged to stay on task as well."</p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Testimonial;

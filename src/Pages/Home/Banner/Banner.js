import React from 'react';
import dog1 from "../../../assets/banner/dog-1.png";
import waveBg1 from "../../../assets/backgrounds/wave-bg-1.svg";
import './Banner.css';

const Banner = () => {
    const bgImage = {
        backgroundImage: `url(${waveBg1})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={bgImage} className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse mt-[-15rem] md:mt-0 lg:mt-0">
                <img src={dog1} className="w-[32rem] md:w-[32rem] lg:w-[50rem]" alt='dog' />
                <div className='text-center md:text-left text-white'>
                    <h1 className="text-5xl font-bold">Online Pet Market</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-secondary md:btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
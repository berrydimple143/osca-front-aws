import React from 'react';
import ImageCard from '../front/parts/ImageCard';

const About = () => {
    return (
        <div className="flex flex-wrap justify-around items-start my-10">
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
                <div className="p-8">
                    <h1 className="text-6xl font-bold text-center text-fourth">About</h1>
                </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
                <div className="p-8">
                    <p className="text-2xl font-bold text-fifth">The creation of the Office for the Senior Citizen's Affairs (OSCA) in the Province of Bulacan paved the way to care for the needs and concerns of our Bulakenyo’s Senior Citizens aged 60 years old and above.</p>
                </div>
            </div>
        </div>
    );
}

export default About;

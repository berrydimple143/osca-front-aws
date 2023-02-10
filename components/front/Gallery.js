import React from 'react';
import Image from 'next/image';

const Gallery = () => {
    return (
        <div className="top-0 left-0 w-full flex flex-wrap">
            <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12">
                <div>
                    <Image
                        src='https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/benefits.png'
                        alt='/'
                        width='490'
                        height='500'
                        object-fit='cover'
                    />
                </div>
                <div className="p-10 navbar-color h-96">
                    <h1 className="text-2xl">BENEPISYO</h1>
                    <p className="text-lg">I-maximize ang kontribusyon ng mga Senior Citizen sa pagbuo ng bansa, pagbigay benepisyo at espesyal na pribilehiyo.</p>
                </div>
            </div>
            <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12">
                <div>
                    <Image
                        src='https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/medic.png'
                        alt='/'
                        width='490'
                        height='500'
                        object-fit='cover'
                    />
                </div>
                <div className="p-10 bg-primary h-96">
                    <h1 className="text-2xl">MEDIKAL</h1>
                    <p className="text-lg">Ang DOH, sa pakikipag-ugnayan sa mga local government units (LGUs), NGOs at POs para sa mga senior citizen, ay dapat magtatag ng isang pambansang programang pangkalusugan at dapat magkaloob ng pinagsamang serbisyong pangkalusugan para sa mga senior citizen.</p>
                </div>
            </div>
            <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12">
                <div>
                    <Image
                        src='https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/job.png'
                        alt='/'
                        width='490'
                        height='500'
                        object-fit='cover'
                    />
                </div>
                <div className="p-10 bg-secondary h-96">
                    <h1 className="text-2xl">HANAPBUHAY</h1>
                    <p className="text-lg">Ang mga senior citizen na may kapasidad at pagnanais na magtrabaho, o muling matrabaho, ay dapat bigyan ng impormasyon at mga serbisyong tumutugma upang sila ay maging produktibong miyembro ng lipunan. Ang mga tuntunin sa pagtatrabaho ay dapat umayon sa mga probisyon ng Kodigo sa Paggawa.</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery;

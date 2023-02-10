import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageCard from '../front/parts/ImageCard';

const Corner = ({ page }) => {
    const [caption1, setCaption1] = useState('');
    const [caption2, setCaption2] = useState('');

    useEffect(() =>
    {
        if(page == 'home')
        {
            setCaption1("REPUBLIC ACT 7432");
            setCaption2("REPUBLIC ACT 9994");
        } else
        {
            setCaption1("REPUBLIC ACT 7432 -->> Please click to read more");
            setCaption2("REPUBLIC ACT 9994 -->> Please click to read more");
        }
    }, []);
    return (
        <div className="flex flex-wrap justify-around items-center">
            { page === "home" && (
                <div className="w-full">
                    <h1 className="text-6xl font-bold text-center text-fourth">SENIOR CITIZENS' CORNER</h1>
                </div>
            )}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
                <div className="p-8">
                    <Link href='/republic-act-7432'>
                        <ImageCard
                            width="240"
                            caption={caption1}
                            description=""
                            imgUrl="https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/Republic-Act-7432.png"
                        />
                    </Link>
                </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
                <div className="p-8">
                    <Link href='/republic-act-9994'>
                        <ImageCard
                            width="240"
                            caption={caption2}
                            description=""
                            imgUrl="https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/RA-9994-e1653009656360.png"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Corner;

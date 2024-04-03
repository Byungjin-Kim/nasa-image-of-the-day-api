import React from "react";

interface NasaImgProps {
    title: string;
    explanation: string;
}

const NasaImg: React.FC<NasaImgProps> = ({ title, explanation }) => {
    return (
        <div className='Nasa-photo-wrapper'>
            <h2>{title}</h2>
            <p>{explanation}</p>
        </div>
    )
}

export default NasaImg;
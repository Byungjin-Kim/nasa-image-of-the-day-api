import React from "react";

interface FigureProps {
    url: string;
    date: string;
}

const Figure: React.FC<FigureProps> = ({ url, date }) => {
    return (
        <figure>
            <img src={url} alt='Nasa today' />
            <figcaption>Awesome img taken on {date}</figcaption>
        </figure>
    )
}

export default Figure;

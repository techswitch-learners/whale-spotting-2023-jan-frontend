import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import './WhaleCarousel.scss'

interface IWhaleImage {
    imageUrl: string;
}

export const WhaleCarousel: React.FunctionComponent = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const whaleImages: IWhaleImage[] = [
        { imageUrl: "https://rb.gy/et4xw9", },
        { imageUrl: "https://rb.gy/aiwcp3", },
        { imageUrl: "https://rb.gy/yyvk6e", },
        { imageUrl: "https://rb.gy/h6aofz", },
        { imageUrl: "https://rb.gy/jikek1", },
        { imageUrl: "https://rb.gy/oyh0kw", },
        { imageUrl: "https://rb.gy/datjr3", },
        { imageUrl: "https://rb.gy/jklrt3", },
        { imageUrl: "https://rb.gy/ms4lfe", },
        { imageUrl: "https://rb.gy/4qoxol" },
    ];

    function scrollNextImage() {
        selectedImage < whaleImages.length - 1 ?
            setSelectedImage(selectedImage + 1) :
            setSelectedImage(0);
    }

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                scrollNextImage()
            }, 3000);
        return () => clearInterval(intervalId);
    }, [selectedImage])

    return (
        <section className="image-info-section">
            <article className="main-image">
                <img className="main-image-tag" src={whaleImages[selectedImage].imageUrl}></img>
            </article>
            <article className="left-right-home-buttons">
                <button className="previous-left-button"
                    onClick={() => { selectedImage > 0 ? setSelectedImage(selectedImage - 1) : setSelectedImage(0) }}>
                    <FaArrowCircleLeft className="button-icon" />
                </button>
                <button className="next-right-button"
                    onClick={() => { scrollNextImage() }}>
                    <FaArrowCircleRight
                        className="button-icon" />
                </button>
            </article>
        </section >
    );
};

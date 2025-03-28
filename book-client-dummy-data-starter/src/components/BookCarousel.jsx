import React, { useState } from "react";

const Carousel = ({ books }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? books.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === books.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button left" onClick={prevSlide}>❮</button>

            <div className="carousel-slide-container">
                {books.map((book, index) => (
                    <div key={index} className={`carousel-slide ${index === currentSlide ? "active" : ""}`}>
                        <img src={book.cover} alt={book.title} />
                        <h2>{book.title}</h2>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>

            <button className="carousel-button right" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;

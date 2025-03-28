import React, { useState, useEffect } from "react";
import './BookCarousel.css'

const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg",
        description: "A novel about the Jazz Age and the pursuit of the American Dream.",
        reviews: ["A timeless classic!", "Beautifully written and deeply moving."]
    },
    {
        id: 2,
        title: "Moby-Dick",
        author: "Herman Melville",
        cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg",
        description: "The epic tale of obsession and revenge at sea.",
        reviews: ["A masterpiece of literature!", "Deep and thought-provoking."]
    }
];

export default function BookCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
    };
    const book = books[currentIndex];
    return (
        <div className="carousel-container">
            {/* Left Button */}
            <button className="carousel-button left" onClick={prevSlide}>❮</button>

            {/* Slide Content */}
            <div className="carousel-slide">
                <div className="book-cover-container">
                    <img src={book.cover} alt={book.title} className="book-cover" />
                </div>
                <div className="book-details">
                    <h2>{book.title}</h2>
                    <h4>by {book.author}</h4>
                    <p className="review">"{book.reviews[0]}"</p>
                </div>
            </div>

            {/* Right Button */}
            <button className="carousel-button right" onClick={nextSlide}>❯</button>
        </div>


    );
}

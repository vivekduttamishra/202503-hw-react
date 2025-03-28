import React, { useState, useRef, useEffect } from "react";
import './BookCard.css'
const BookCard = ({ book, onChangeStatus, onRemove }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (showPopup && buttonRef.current && popupRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const popupHeight = popupRef.current.offsetHeight;
  
      popupRef.current.style.position = "fixed";
  
      // If there's space, place it above; otherwise, place it below
      if (buttonRect.top > popupHeight) {
        popupRef.current.style.top = `${buttonRect.top - popupHeight}px`; // Above button
      } else {
        popupRef.current.style.top = `${buttonRect.bottom}px`; // Default below button
      }
      
      popupRef.current.style.left = `${buttonRect.left}px`;
    }
  }, [showPopup]);

  return (
    <div className="book-card">
      <img src={book.cover || "default-cover.jpg"} alt={book.title} className="book-cover" />
      <h3>{book.title}</h3>

      <div className="button-container">
        {/* Status Change Button */}
        <button ref={buttonRef} className="menu-button" onClick={() => setShowPopup(!showPopup)}>⋮</button>

        {/* Delete Button (Red "X" Next to Menu Button) */}
        <button className="delete-button" onClick={() => onRemove(book.id)}>❌</button>
      </div>

      {/* Popup Menu (Dropdown below Button) */}
      {showPopup && (
        <div className="popup-menu" ref={popupRef}>
          <button onClick={() => { onChangeStatus(book.id, "Want to Read"); setShowPopup(false); }}>Want to Read</button>
          <button onClick={() => { onChangeStatus(book.id, "Reading"); setShowPopup(false); }}>Reading</button>
          <button onClick={() => { onChangeStatus(book.id, "Read"); setShowPopup(false); }}>Read</button>
        </div>
      )}
    </div>
  );
};

export default BookCard;

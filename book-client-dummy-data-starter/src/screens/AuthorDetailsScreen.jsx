import { useState } from "react";
import ScrollableList from "../components/ScrollableList";
import {Link} from 'react-router-dom'
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons

const author = {
   "id": "vivek-dutta-mishra",
   "name": "Vivek Dutta Mishra",
   "bio": "Vivek, by profession, is a Software Technology Enabler—a self-professed title. In this role, he enables the software companies to develop better software designs, build robust architecture, and most importantly, make effective software professionals. With over two decades of experience as a speaker, influencer and educator, his impressive clientele includes the likes of TCS, Mercedes, GE, Mindtree, CISCO, HP, JPMorgan, BNP Paribas, Honeywell, L&T, Walmart, Siemens, Capgemini … But long before associating with software technology, he has been passionate about Indian history and epics and did an extensive study on the subject. Armed with a firm conviction about the superiority of ancient pre-historic literature, over history, he has scripted and directed stage shows such as Ramlila to show various perspectives of the great epic. This series and its inspiration come both from the frustration of the systematic condemnation of our superior Indian culture and a sense of duty to stand it.",
   "primaryWorks": [
      "The Accursed God"
   ],
   "tags": [
      "English",
      "Historical Fiction",
      "Mythology",
      "India"
   ],
   "photo": "https://m.media-amazon.com/images/S/amzn-author-media-prod/2fuqj5h433n56ucdr3s5j1k2j9._SY450_CR0%2C0%2C450%2C450_.jpg",
   "social": {
      "twitter": "https://twitter.com/vivek_mishra",
      "facebook": "https://www.facebook.com/vivekduttamishra"
   },
   books: [
      {
         "id": "the-accursed-god",
         "title": "The Accursed God",
         "authorId": "vivek-dutta-mishra",
         "price": 349,
         "rating": 4.5,
         "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
      },
      {
         "id": "the-accursed-god",
         "title": "The Accursed God",
         "authorId": "vivek-dutta-mishra",
         "price": 349,
         "rating": 4.5,
         "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
      },
      {
         "id": "the-accursed-god",
         "title": "The Accursed God",
         "authorId": "vivek-dutta-mishra",
         "price": 349,
         "rating": 4.5,
         "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
      },
      {
         "id": "the-accursed-god",
         "title": "The Accursed God",
         "authorId": "vivek-dutta-mishra",
         "price": 349,
         "rating": 4.5,
         "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
      },
      {
         "id": "the-accursed-god",
         "title": "The Accursed God",
         "authorId": "vivek-dutta-mishra",
         "price": 349,
         "rating": 4.5,
         "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
      },
      {
         "id": "the-accursed-god",
         "title": "The Accursed God",
         "authorId": "vivek-dutta-mishra",
         "price": 349,
         "rating": 4.5,
         "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
      },
      {
         "id": "the-accursed-god",
         "title": "The Accursed God",
         "authorId": "vivek-dutta-mishra",
         "price": 349,
         "rating": 4.5,
         "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
      },
      {
         "id": "the-accursed-god",
         "title": "The Accursed God",
         "authorId": "vivek-dutta-mishra",
         "price": 349,
         "rating": 4.5,
         "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
      },
      {
         "id": "the-accursed-god",
         "title": "The Accursed God",
         "authorId": "vivek-dutta-mishra",
         "price": 349,
         "rating": 4.5,
         "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
      },
   ]
}


export default function AuthorDetailsScreen() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(100); // Default count

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    setFavoriteCount((prev) => (isFavorited ? prev - 1 : prev + 1));
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">{author.name}</h1>
      <div className="row">
        {/* Author Image */}
        <div className="col-12 col-md-4 text-center">
          <img src={author.photo} alt={author.name} className="img-fluid" style={{ maxWidth: "200px" }} />

          {/* Favorite Icon and Count */}
          <div className="mt-2 d-flex align-items-center justify-content-center">
            <span onClick={toggleFavorite} style={{ cursor: "pointer", fontSize: "24px", color: isFavorited ? "red" : "gray" }}>
              {isFavorited ? <FaHeart /> : <FaRegHeart />}
            </span>
            <span className="ms-2">{favoriteCount}</span>
          </div>

          {/* Tags */}
          <div className="mt-2">
            {author.tags.map((tag, index) => (
              <span key={index} className="badge bg-primary me-1">{tag}</span>
            ))}
          </div>
        </div>

        {/* Biography */}
        <div className="col-12 col-md-8">
          <p>{author.bio}</p>
        </div>
      </div>

      {/* Scrollable Book List */}
      <h3 className="mt-4">Books by {author.name}</h3>
      <ScrollableList>
        {author.books.map((book) => (
          <div key={book.id} className="scrollable-list-item text-center">
            <img src={book.cover} alt={book.title} className="img-fluid" />
            <p className="mt-1 small">{book.title}</p>
          </div>
        ))}
      </ScrollableList>
    </div>
  );
}

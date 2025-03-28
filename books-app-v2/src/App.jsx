import './App.css'
import BookListScreen from './books/BookListScreen'
import AuthorDetailScreen from './authors/screens/AuthorDetailsScreen'
import AuthorAddScreen from './authors/screens/AuthorAddScreen'
import AuthorEditScreen from './authors/screens/AuthorEditScreen'
import AuthorListScreen from './authors/screens/AuthorListScreen'
import BookAddScreen from './books/screens/BookAddScreen'
import BookEditScreen from './books/screens/BookEditScreen'
import BookDetailsScreen from './books/screens/BookDetailsScreen'
import UserLoginScreen from './users/screens/UserLoginScreen'
import UserRegisterScreen from './users/screens/UserRegisterScreen'
import AppHeader from './commons/components/AppHeader'
import NotFoundScreen from './commons/screens/NotFoundScreen'

import {  Routes, Route } from 'react-router-dom'
import HomeScreen from './commons/screens/HomeScreen'


let books = [
  {
      "id": "the-accursed-god",
      "title": "The Accursed God",
      "authorId": "vivek-dutta-mishra",
      "price": 349,
      "rating": 4.5,
      "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
  },
  {
      "id": "harry-potter-and-the-philosophers-stone",
      "title": "Harry Potter and the Philosopher's Stone",
      "authorId": "jk-rowling",
      "price": 450,
      "rating": 4.8,
      "cover": "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg"
  },
  {
      "id": "harry-potter-and-the-chamber-of-secrets",
      "title": "Harry Potter and the Chamber of Secrets",
      "authorId": "jk-rowling",
      "price": 450,
      "rating": 4.7,
      "cover": "https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg"
  },
  {
      "id": "kane-and-abel",
      "title": "Kane and Abel",
      "authorId": "jeffrey-archer",
      "price": 399,
      "rating": 4.6,
      "cover": "https://images-eu.ssl-images-amazon.com/images/I/51Io01xRjsL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
      "id": "rashmirathi",
      "title": "Rashmirathi",
      "authorId": "ramdhari-singh-dinkar",
      "price": 199,
      "rating": 4.8,
      "cover": "https://rukminim1.flixcart.com/image/416/416/kcf4lu80/regionalbooks/h/s/w/rashmirathi-jnanpith-award-winner-1972-hindi-original-imaftjbmp73rjcfb.jpeg?q=70"
  }
]


function App() {


  return (
    <div>

        <AppHeader title="Book's Web" />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/authors" element={<AuthorListScreen />} />

            <Route path="/authors/add" element={<AuthorAddScreen />} />
            <Route path="/authors/:id" element={<AuthorDetailScreen />} />
            <Route path="/authors/edit/:id" element={<AuthorEditScreen />} />


            <Route path="/books" element={<BookListScreen  books={books} />} />
            <Route path="/books/add" element={<BookAddScreen />} />
            <Route path="/books/:id" element={<BookDetailsScreen books={books} />} />
            <Route path="/books/edit/:id" element={<BookEditScreen />} />

            <Route path="/user/login" element={<UserLoginScreen />} />
            <Route path="/user/register" element={<UserRegisterScreen />} />

            <Route path="*" element={<NotFoundScreen />} />


          </Routes>
        </div>

    </div>
  )
}

export default App

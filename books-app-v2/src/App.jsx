import './App.css'
import AuthorListScreen from './authors/screens/AuthorListScreen'
import AuthorDetailScreen from './authors/screens/AuthorDetailsScreen'
import AuthorAddScreen from './authors/screens/AuthorAddScreen'
import AuthorEditScreen from './authors/screens/AuthorEditScreen'
import BookListScreen from './books/screens/BookListScreen'
import BookAddScreen from './books/screens/BookAddScreen'
import BookEditScreen from './books/screens/BookEditScreen'
import BookDetailsScreen from './books/screens/BookDetailsScreen'
import UserLoginScreen from './users/screens/UserLoginScreen'
import UserRegisterScreen from './users/screens/UserRegisterScreen'
import AppHeader from './commons/components/AppHeader'
import NotFoundScreen from './commons/screens/NotFoundScreen'

import {  Routes, Route } from 'react-router-dom'
import HomeScreen from './commons/screens/HomeScreen'
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


            <Route path="/books" element={<BookListScreen />} />
            <Route path="/books/add" element={<BookAddScreen />} />
            <Route path="/books/:id" element={<BookDetailsScreen />} />
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

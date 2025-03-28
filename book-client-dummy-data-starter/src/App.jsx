import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import BookListScreen from './screens/BookListScreen'
import AuthorListScreen from './screens/AuthorListScreen'
import { Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title="Book Apps" />
      <div className='container'>
        <Routes>
          {
            routes.map(route => {
              //console.log(route);
            return <Route key={route.path} path={route.path} element={route.element} />
            })
          }
        </Routes>
      </div>
    </div>
  )
}

export default App

import './App.css'
import AuthorListScreen from './authors/screens/AuthorListScreen'
import AppHeader from './commons/components/AppHeader'

function App() {


  return (
    <div>
      <AppHeader title="Book's Web" />
      <AuthorListScreen />
    </div>
  )
}

export default App

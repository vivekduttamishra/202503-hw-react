import { useState } from "react";
import BookList from "./components/BookList"
import BookManager from "./components/BookManage";
import SiteHeader from "./components/SiteHeader"
import AuthorManage from "./components/AuthorManage";
import HomeScreen from "./components/HomeScreen";

let App = () => {
 
    const [user,login]=useState(null);
    const [screen,navigate]=useState('home')

    return (
        <div>
            <SiteHeader title="World Wide Books" 
                        user={user} 
                        onLogin={login} 
                        onNavigate={navigate}
                    />
            {/* <BookManager user={user} /> */}
            {screen==='authors' && <AuthorManage user={user}/>}
            {screen==='books' &&<BookManager user={user} />}
            {screen==='home' && <HomeScreen/>}
        </div>
    )

}

export default App;
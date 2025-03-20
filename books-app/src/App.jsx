import BookList from "./components/BookList"
import BookManager from "./components/BookManage";
import SiteHeader from "./components/SiteHeader"

let App = () => {
 

    return (
        <div>
            <SiteHeader title="World Wide Books" />
            <BookManager/>
        </div>
    )

}

export default App;
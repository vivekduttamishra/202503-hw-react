import BookList from "./components/BookList"
import BookManage from "./components/BookManage";
import SiteHeader from "./components/SiteHeader"

let App = () => {
 

    return (
        <div>
            <SiteHeader title="World Wide Books" />
            <BookManage/>
        </div>
    )

}

export default App;
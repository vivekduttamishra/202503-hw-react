import '../utils/arrays'
import delay from '../utils/delay'

import axios from '../utils/http'

const url = 'http://localhost:3000/api/books';

class BookService  {
    constructor(){
        this._books=[
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
    }

    getAll=async()=>{
        const response =await axios.get(url)
        //console.log('response',response);
        return response.data;
    }

    getById=async(id)=>{
       let u= `${url}/${id}`
       try{
         const response= await axios.get(u)
         return response.data; //on success
       }catch(error){
        console.log('error',error);
        throw error;
       }
    }

    add=(book)=>{
        this._books.push(book)
    }

    getRandom=()=>{
        //get a random book from this._books
        const randomIndex = Math.floor(Math.random() * this._books.length);
        return this._books[randomIndex];
    }

    search=(matcher)=>{
        return this._books.filter(matcher);
    }

    remove=(id)=>{
        this._books=this._books.filter(b=>b.id.toLower()!==id);
    }

    update=(book)=>{
        this._books=this._books.map(b=> b.id===book.id ? book : b )
    }

}

export default new BookService();
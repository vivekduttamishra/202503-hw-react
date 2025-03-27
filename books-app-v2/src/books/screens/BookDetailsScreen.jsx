import {useParams, useNavigate} from 'react-router-dom'

const BookDetailsScreen = ({})=>{

    const {id} = useParams();
    const navigator= useNavigate();

    const handleBackButton=()=>{
        navigator('/books');
    }

    return (
    <div className="BookDetailsScreen">
        <h2>Fetching details of {id}</h2>

        <button onClick={handleBackButton} className='btn btn-primary'>Back to List</button>
    </div>
    )
}

export default BookDetailsScreen;
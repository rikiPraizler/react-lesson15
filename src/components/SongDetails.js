import { useSelector } from "react-redux";

const SongDetails = () => {

    let selectedBook=useSelector(state=>state.selectedBook)
    return ( <>
    <h3>{selectedBook.name}</h3>
    <h3>{selectedBook.price}</h3>
    <h3>{selectedBook.author}</h3>

    </> );
}
 
export default SongDetails;
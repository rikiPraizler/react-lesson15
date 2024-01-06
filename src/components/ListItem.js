import { useDispatch } from "react-redux";
import { deleteBook, selectBook, selectBookForEdit } from "../store/actions/book";

const ListItem = ({one}) => {

    let disPatch=useDispatch();
    return ( <>
    <h3>{one.name}</h3>
    <input type="button" onClick={()=>{disPatch(selectBook(one))}} value="הצג פרטים"/>
    <input type="button" onClick={()=>{disPatch(selectBookForEdit(one))}} value="ערוך"/>
    <input type="button" onClick={()=>{disPatch(deleteBook(one.id))}} value="מחק"/>

    </> );
}
 
export default ListItem;
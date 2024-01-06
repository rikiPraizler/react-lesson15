import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import AddBook from "./AddBook";
import { addBook, openFormForAdd } from "../store/actions/book";

const List = () => {
    let arr=useSelector(state=> state.arr);
    let disPatch=useDispatch();
    return (<> רשימת ספרים
    <ul>
        {arr.map(item=><li><ListItem one={item}/></li>)}
    </ul>
    <input type="button" onClick={()=>(disPatch(openFormForAdd()))} value="הוסף ספר"/>

    </> );
}
 
export default List;
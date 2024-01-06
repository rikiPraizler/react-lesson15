import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBook } from "../store/actions/book";

const AddBook = () => {

    let { register, handleSubmit } = useForm();

    let disPatch = useDispatch();

    const saveData = (data) => {
        disPatch(addBook(data));
    }
    return (<form onSubmit={handleSubmit(saveData)}>
        <label>שם</label>
        <input {...register("name")} />
        <label>מחיר</label>
        <input {...register("price")} />
        <label>מחברת</label>
        <input {...register("author")} />

        <input type="submit" />

    </form>);
}

export default AddBook;
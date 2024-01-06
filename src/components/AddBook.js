import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBook } from "../store/actions/book";

const AddBook = () => {
    let code = 5;
    let { register, handleSubmit, reset } = useForm();

    let disPatch = useDispatch();

    const saveData = (data) => {
        // let b = {
        //     name: data.name,
        //     price: data.price,
        //     author: data.author,
        //     id: code++
        // }
        disPatch(addBook(data));
        reset();
    }
    return (<form onSubmit={handleSubmit(saveData)}>
        <label>שם</label>
        <input {...register("name")} />
        <label>מחיר</label>
        <input {...register("price")} />
        <label>מחברת</label>
        <input {...register("author")} />
        <label>קוד</label>
        <input {...register("id")} />
        <input type="submit" />

    </form>);
}

export default AddBook;
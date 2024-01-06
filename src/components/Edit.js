import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedBook, selectBookForEdit } from "../store/actions/book";

const Edit = () => {
    let selectedBookForEdit = useSelector(state => state.selectedBookForEdit);
    let { register, handleSubmit } = useForm({
        defaultValues: selectedBookForEdit
    }
    );
    let disPatch = useDispatch();
    const saveData = (data) => {
        disPatch(saveEditedBook(data));
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

export default Edit;
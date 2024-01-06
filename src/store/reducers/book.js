///////הוספתי את  addBook  לכולם
const initialState = {
    arr: [
        { id: 100, name: "aaa", price: 111, src: "", author: "shira" },
        { id: 200, name: "bbb", price: 222, src: "", author: "michal" },
        { id: 300, name: "ccc", price: 333, src: "", author: "efrat" },
        { id: 400, name: "ddd", price: 444, src: "", author: "sara" },
        { id: 500, name: "eee", price: 555, src: "", author: "chana" }

    ],
    selectedBook: null,
    selectedBookForEdit: null,
    openFormForAdd: null
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            // let copyArr =[...state.arr] ;
            // copyArr.push(action.payload);
            return {
                ...state,
                openFormForAdd: null,
                openFormForAdd: null,
                arr: [...state.arr, action.payload]
                // openFormForAdd: null
            }

        //קיצור לכל הנל
        // return { ...state, arr: [...state.arr, action.payload], openFormForAdd: null }

        case "SELECT_BOOK":
            // return {
            //     selectedBook: action.payload,
            //     selectedBookForEdit: state.selectedBookForEdit,
            //     arr: state.arr
            // }
            return {
                ...state,
                selectedBook: action.payload,
                selectedBookForEdit: null,
                openFormForAdd:null
            }

        case "SELECT_BOOK_FOR_EDIT":
            return {
                selectedBook: null,
                selectedBookForEdit: action.payload,
                arr: state.arr,
                openFormForAdd: null

            }

        case "DELETE_BOOK":
            return {
                selectedBook: state.selectedBook?.id != action.payload ? state.selectedBook : null,
                selectedBookForEdit: state.selectedBookForEdit?.id != action.payload ? state.selectedBookForEdit : null,
                arr: state.arr.filter(item => item.id != action.payload),
                openFormForAdd: state.openFormForAdd

            }

        case "SAVE_EDITED_BOOK":
            let copy = state.arr.map(item => {
                if (item.id != action.payload.id)
                    return item;
                return action.payload;
            })
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: null,
                arr: copy,
                openFormForAdd: state.openFormForAdd
            }

        case "OPEN_FORM_FOR_ADD":
            return {
                selectedBook: null,
                selectedBookForEdit: null,
                arr: state.arr,
                openFormForAdd: true

            }

        default: return state;
    }
}
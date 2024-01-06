
export const selectBook=(book)=>{
    return{
        type: "SELECT_BOOK",
        payload: book
    }
}

export const addBook=(book)=>{
    return{
        type: "ADD_BOOK",
        payload: book
    }
}

export const openFormForAdd=()=>{
    return{
        type: "OPEN_FORM_FOR_ADD",
    }
}

export const deleteBook=(bookId)=>{
    return{
        type: "DELETE_BOOK",
        payload: bookId
    }
}

export const selectBookForEdit=(book)=>{
    return{
        type: "SELECT_BOOK_FOR_EDIT",
        payload: book
    }
}

export const saveEditedBook=(bookId)=>{
    return{
        type: "SAVE_EDITED_BOOK",
        payload: bookId
    }
}
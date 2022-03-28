import React from "react";
import { nanoid } from "nanoid";
import { actionTypes } from "./actionTypes";
import { BookReducer } from "./BookReducer";
import { IBook, IBookState } from "../types/Interfaces";

const initialState: IBookState = {
    books: [
        {
            _id: "",
            title: "",
            first: "",
            last: "",
            age: 0,
            info: "",
            book: {} as IBook
        }
    ]
};

type Props = {
    children: React.ReactNode
};

const URL = "https://book5-restapi.herokuapp.com/api";
export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({children}: Props) => {
    const [state, dispatch] = React.useReducer(BookReducer, initialState);

    async function getBooks() {
        const res = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const books = await res.json();
        dispatch({
            type: actionTypes.FETCH_ALL_BOOKS,
            payload: books
        });
    };

    async function createBook(payload: IBook) {
        const res = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                _id: nanoid(), title: payload.title, 
                first: payload.first, last: payload.last, 
                age: payload.age, info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const book = await res.json();
        dispatch({
            type: actionTypes.CREATE_BOOK,
            payload: book
        })
    };

    async function updateBook(payload: IBook) {
        const res = await fetch(`${URL}/${payload._id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                _id: payload._id, title: payload.title, 
                first: payload.first, last: payload.last, 
                age: payload.age, info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const book = await res.json();
        dispatch({
            type: actionTypes.UPDATE_BOOK,
            payload: book
        })
    };

    async function deleteBook(payload: IBook) {
        const res = await fetch(`${URL}/${payload._id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        const book = await res.json();
        dispatch({
            type: actionTypes.DELETE_BOOK,
            payload: book
        });
    };

    return (
        <GlobalContext.Provider value={{
            books: state.books,
            getBooks,
            createBook,
            updateBook,
            deleteBook
        }}>
            { children }
        </GlobalContext.Provider>
    );
};




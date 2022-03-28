import { actionTypes } from "./actionTypes";
import { IBookState, IAction } from "../types/Interfaces";

export const BookReducer = 
(state: IBookState, action: IAction) => {
    switch(action.type) {
        case actionTypes.FETCH_ALL_BOOKS: {
            return {
                ...state,
                // loading: false,
                books: [...state.books, action.payload],
            };
        };

        case actionTypes.CREATE_BOOK: {
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        };

        case actionTypes.UPDATE_BOOK: {
            const updatedBook = action.payload;
            const updatedBOOKS = state.books.map((book) => {
                if (book._id === updatedBook.book._id) {
                    return updatedBook;
                };
                return book;
            });
            return {
                ...state,
                books: updatedBOOKS
            };
        };

        case actionTypes.DELETE_BOOK: {
            return {
                ...state,
                books: state.books.filter(
                    (book) => book._id !== 
                        action.payload.book._id)
            }
        };

        // case actionTypes.BOOK_ERROR: {
        //     return {
        //         ...state,
        //         error: action.payload
        //     }
        // };

        default:
            return state;
    };
};





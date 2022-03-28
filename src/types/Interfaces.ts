import { actionTypes } from "../global/actionTypes";

export interface IBook {
    _id: string,
    title: string,
    first: string,
    last: string,
    age: number,
    info: string,
    book: IBook
};

export type IAction = {
    type: actionTypes,
    payload: IBook
};

export interface IBookState {
    books: IBook[],
    getBooks?: () => Promise<void>,
    createBook?: (payload: IBook) => Promise<void>,
    updateBook?: (payload: IBook) => Promise<void>,
    deleteBook?: (payload: IBook) => Promise<void>
};







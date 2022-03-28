import { actionTypes } from "../global/actionTypes";

export interface IBook {
    _id: string,
    title: string,
    first: string,
    last: string,
    age: number,
    info: string
};

export interface IBookState {
    books: IBook[],
};

export interface IAction {
    type: actionTypes,
    payload: {
        book: IBook
    }
};



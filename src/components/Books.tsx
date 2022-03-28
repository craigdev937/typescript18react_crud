import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../global/GlobalState";

export const Books = (): JSX.Element => {
    const { books } = React.useContext(GlobalContext);

    React.useEffect(() => {
        books
        console.log(books);
    }, []);
   
    return (
        <React.Fragment>
            {books.map((book) => (
                <main key={book._id}>
                    <h1>{book.title}</h1>
                    <p>Author: {book.first} {book.last}</p>
                    <p>Age: {book.age}</p>
                    <p>Info: {book.info}</p>
                </main>
            ))}
        </React.Fragment>
    );
};




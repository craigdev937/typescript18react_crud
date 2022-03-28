import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { GlobalProvider } from "../global/GlobalState";

export const App = (): JSX.Element => {
    return (
        <GlobalProvider>
            <React.Fragment>
                <Main />
            </React.Fragment>
        </GlobalProvider>
    );
};




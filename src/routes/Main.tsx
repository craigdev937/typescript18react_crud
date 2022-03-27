import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Books } from "../components/Books";
import { Add } from "../containers/Add";
import { Edit } from "../containers/Edit";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path="/" element={<Books />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </React.Suspense>
    </BrowserRouter>
);




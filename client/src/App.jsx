import React from "react";
import Homepage from "./pages/Homepage";

import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Search from "./components/Search";
import Generate from "./components/Generate";

const App = () => {
    return (

        <DndProvider backend={Backend}>
            <Header />
            <Search />
            <Homepage />
            <Generate />
        </DndProvider>
    );
};

export default App;
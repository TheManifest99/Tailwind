import './App.css';
import Page from "./pages/page";
import React from "react";

//  Incercare proasta de a utiliza useContext ca sa observ dupa ca as fi putut sa fac cu o functie in stil  "toggle"
//  Oricum functioneaza si s-ar fi transmis un obiect 
const visibility = {
    open: {
        vis: true,
    },
    closed: {
        vis: false,
    }
}

export const VisibilityContext = React.createContext();

function App() {
    return (
        <VisibilityContext.Provider value={visibility} className="App bg">
            <Page/>
        </VisibilityContext.Provider>
    );
}

export default App;

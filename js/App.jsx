import React from "react";
import Header from "./Header.jsx";

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="bg-gray-100 h-full p-8 print:p-0 print:bg-transparent">
                <div id="svg_canvas">
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;

import React from "react";

const Logo = () => <h1 className="text-4xl logo">BoxCreator</h1>;

const Header = () => {
    return (
        <div className="bg-white flex-none print:hidden flex flex-row items-center p-4 shadow-lg z-10">
            <Logo />
            <div className="ml-auto">
                <label htmlFor="w" className="mr-2">
                    width (mm):
                </label>
                <input
                    id="w"
                    type="number"
                    className="leading-none p-2 border border-gray-400 rounded w-16"
                    min="0"
                    max="100"
                />
                <label htmlFor="h" className="mr-2">
                    height (mm):
                </label>
                <input
                    id="h"
                    type="number"
                    className="leading-none p-2 border border-gray-400 rounded w-16"
                    min="0"
                    max="100"
                />
                <label htmlFor="d">depth (mm):</label>
                <input
                    id="d"
                    type="number"
                    className="leading-none p-2 border border-gray-400 rounded w-16"
                    min="0"
                    max="50"
                />
            </div>
        </div>
    );
};
export default Header;

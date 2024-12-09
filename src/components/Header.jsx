import React from "react";
import cookingLogo from "../assets/cooking.png"
export default function Header() {
    return (
        <header className="header">
            <img className="header-logo" src={cookingLogo} alt="header logo" />
            <h1 className="header-title">Claude Chef</h1>
        </header>
    );
}

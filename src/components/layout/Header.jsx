import { Link } from "react-router-dom";
import './Header.css'
import { useState } from "react";

function Header() {

    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <header className="header">

            <nav className="header_nav">
                <ul className="header_links">
                    <li>Sport</li>
                    <li>Casual</li>
                    <li>Elegant</li>
                    <li>Italian</li>
                </ul>

            </nav>
            <div className="title">
                <h1>Pinta</h1>
            </div>

            <div className="search">
                <button onClick={() => setSearchOpen(!searchOpen)}>
                    Search
                </button>

                { searchOpen && (
                    <div className="search_panel">
                        <p>Results</p>
                    </div>
                )}
            </div>
        </header>
    )
}


export default Header
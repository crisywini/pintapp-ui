import { Link } from "react-router-dom";
import './Header.css'
import { useState } from "react";
import { Search } from "lucide-react";

function Header() {

    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <header className="header">

            <nav className="header_nav">
                <ul className="header_links">
                    <li>
                        <Link to='/items'>Closet</Link>
                    </li>
                    <li>Pinta</li>
                    <li>LookBook</li>
                    <li>Diary</li>
                    <li>Ocassion</li>
                </ul>

            </nav>
            <div className="title">
                <h1>CS</h1>
            </div>

            <div className="search">
                <button onClick={() => setSearchOpen(!searchOpen)} className="searchButton">
                    <Search size={20}/>
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
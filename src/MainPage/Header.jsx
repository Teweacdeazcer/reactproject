import React from "react";

function Header(){
    return(
        <header className="header">
            <nav>
                <div className="logo">Magic EYES</div>
                <a href="/">MAIN</a>
                <a href="/glasses">GLASSES</a>
                <a href="/onsale">ON SALE</a>
                <a href="/event">EVENT</a>
                <a href="/inquiry">INQUIRY</a>
            </nav>
        </header>
    );
}

export default Header;
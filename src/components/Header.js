import React from 'react';

function Header() {
    return (
        <header className="Header">
        <h2>Weather</h2>
            <div className="CitiesNav">
                <a href="/?city=tokyo">Tokyo</a>
                <a href="/?city=london">London</a>
                <a href="/?city=chicago">Chicago</a>
                <a href="/?city=jerusalem">Jerusalem</a>
            </div>
        </header>

    )

}

export default Header;
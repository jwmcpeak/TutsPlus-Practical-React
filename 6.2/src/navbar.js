import React from 'react';

export default function Navbar(props) {
    let items = props.items.map((item, index) =>
        <NavbarItem key={index} {...item} />
    );

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        {items}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function NavbarItem(props) {
    return (
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    );
}
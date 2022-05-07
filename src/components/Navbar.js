import React from "react";

import { MenuItems } from "./MenuItems";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-header">React</h1>

                <ul className="list-inline">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>

                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default Navbar
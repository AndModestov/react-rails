import React from "react";
import { NavLink } from "react-router-dom";

import { catalogPath, contactsPath } from "src/helpers/routes";
import BasketButton from 'src/components/views/basket/button';

class Menu extends React.Component {
  render() {
    return (
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="navbar-inner">
          <nav>
            <ul className="nav nav-pills">
              <li>
                <NavLink activeClassName="active" exact to={catalogPath()}>Catalog</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={contactsPath()}>Contacts</NavLink>
              </li>
              <li className="pull-right">
                <BasketButton />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Menu;

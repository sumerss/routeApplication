import { NavLink } from 'react-router-dom';

import React from 'react';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? classes.active : undefined}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='events'
                className={({ isActive }) => isActive ? classes.active : undefined}>
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default MainNavigation;

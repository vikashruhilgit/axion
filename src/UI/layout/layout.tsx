import React from "react";

import { Props } from "./layout.modal";

import classes from './layout.module.scss'

const Layout = (props:Props) => {
  return (
    <React.Fragment>
      <header className={classes.AppHeader}>
        <h2>Assessment Test</h2>
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </React.Fragment>
  );
};

export default Layout;

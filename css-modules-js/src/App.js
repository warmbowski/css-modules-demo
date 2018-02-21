import React, { Component } from 'react';
import Button from './components/Button/Button';

import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.section}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <header className={styles.header}>
          <Button>Default</Button>
        </header>
      </div>
    );
  }
}

export default App;

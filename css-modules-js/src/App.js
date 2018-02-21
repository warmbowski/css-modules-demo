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
        <header className={styles.header} style={{ backgroundColor: 'white', display: 'flex', height: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexBasis: '50%' }}>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button btnType="primary">Primary</Button>
            <Button btnType="success">Success</Button>
            <Button btnType="bordered">Bordered</Button>
            <Button btnType="secondary">Secondary</Button>
            <Button btnType="secondary-light">Secondary Light</Button>
            <Button btnType="tertiary">Tertiary</Button>
            <Button btnType="danger-light">Danger Light</Button>
            <Button btnType="brand">Brand</Button>
            <Button btnType="loyalty">Loyalty</Button>
            <Button btnType="campaign">Campaign</Button>
            <Button btnType="campaign-light">Campaign Light</Button>
            <Button btnType="marketing">Marketing</Button>
            <Button btnType="marketing-light">Marketing Light</Button>
            <Button btnType="marketing-light-alt">Marketing Light Alt</Button>
            <Button btnType="link">Link</Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexBasis: '50%' }}>
            <Button size="lg" btnType="tertiary">Large</Button>
            <Button size="md" btnType="tertiary">Medium</Button>
            <Button size="sm" btnType="tertiary">Small</Button>
            <Button size="xs" btnType="tertiary">Extra</Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

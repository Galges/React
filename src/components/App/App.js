import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Things to do ', <sup>soon!</sup>]} imageLink={'https://images.pexels.com/photos/4644812/pexels-photo-4644812.jpeg?cs=srgb&dl=pexels-felix-mittermeier-4644812.jpg&fm=jpg'}>

        </List>
      </main>
    )
  }
}

export default App;

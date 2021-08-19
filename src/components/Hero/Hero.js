import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
    render() {
      return (
        <header className={styles.component}>
            <h2 className={styles.title}>Things to do!</h2>
            <img className={styles.image} src='https://images.pexels.com/photos/4644812/pexels-photo-4644812.jpeg?cs=srgb&dl=pexels-felix-mittermeier-4644812.jpg&fm=jpg'></img>
        </header>
        )
    }
}

export default Hero;
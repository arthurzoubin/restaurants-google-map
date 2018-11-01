import React from 'react';
import styles from './Hello.module.scss';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  _handleChangeName(e) {
    const name = e.target.value;
    this.setState({
      name,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div
        className={styles.container}
      >
        <h1>
          {
            !!name ? `Hello ${name}` : 'Please input your name.'
          }
          {
            !!name && name === 'Arthur' ? ', Nice to meet you!' : null
          }
        </h1>
        <input
          className={styles.input}
          placeholder="Your name"
          type="text"
          value={name}
          onChange={(e) => this._handleChangeName(e)}
        />
      </div>
    );
  }
}

export default Hello;
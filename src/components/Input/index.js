import React from 'react';
import {TextInput} from 'react-native';
import Label from '../Label';

import styles from './styles';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'value test'};
  }
  render() {
    return (
      <>
        {this.props.label && <Label>{this.props.label}</Label>}
        <TextInput style={styles.input} {...this.props} />
      </>
    );
  }
}

export default Input;

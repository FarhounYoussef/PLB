import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} {...this.props}>
        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;

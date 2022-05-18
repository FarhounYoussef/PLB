import React from 'react';
import {TextInput, Text} from 'react-native';

import styles from './styles';

class List extends React.Component {
  render() {
    return (
      <>
        {this.props.label && <Text>{this.props.label}</Text>}
        <TextInput style={styles.input} {...this.props} />
      </>
    );
  }
}

export default List;

import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

class List extends React.Component {
  render() {
    return <TextInput style={styles.input} {...this.props} />;
  }
}

export default List;

import React from 'react';
import {Text} from 'react-native';

class Label extends React.Component {
  render() {
    return <Text style={{color: 'red'}}>{this.props.children}</Text>;
  }
}

export default Label;

import React from 'react';
import View from './view';

class Detail extends React.Component {
  render() {
    return <View data={this.props.route.params.product} />;
  }
}

export default Detail;

import React from 'react';
import View from './view';

const DATA = {
  id: 4,
  product: 'Product 4',
  description: 'Desc Product 4',
  prix: 100,
  stock: 2,
  image:
    'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/e/a/a/eaa5f0bd77_50166388_chat-gris.jpg',
};

class Detail extends React.Component {
  render() {
    return <View data={DATA} />;
  }
}

export default Detail;

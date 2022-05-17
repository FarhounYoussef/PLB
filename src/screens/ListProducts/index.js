/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import View from './View';

const DATA = [
  {
    id: 1,
    product: 'Product 1',
    description: 'Desc Product 1',
    prix: 100,
    stock: 2,
    image:
      'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/e/a/a/eaa5f0bd77_50166388_chat-gris.jpg',
  },
  {
    id: 2,
    product: 'Product 2',
    description:
      'Desc Product 2 jhvkjdshvkjsbvkbsdkvbskb kadbvhsdvbc kbahcdacv  hahcvjhadcv hgahcvuhadc hgaicaduv gaisgcuyadc  yacsuvadc iugibihb ciaciadvc aicbavdc kjbicbia',
    prix: 100,
    stock: 2,
    image:
      'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/e/a/a/eaa5f0bd77_50166388_chat-gris.jpg',
  },
  {
    id: 3,
    product: 'Product 3',
    description: 'Desc Product 3',
    prix: 100,
    stock: 2,
    image:
      'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/e/a/a/eaa5f0bd77_50166388_chat-gris.jpg',
  },
  {
    id: 4,
    product: 'Product 4',
    description: 'Desc Product 4',
    prix: 100,
    stock: 2,
    image:
      'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/e/a/a/eaa5f0bd77_50166388_chat-gris.jpg',
  },
];

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
    console.log(props.navigation);
  }

  componentDidMount() {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({data: DATA, loading: false});
    }, 2000);
  }

  onDetail = item => {
    this.props.navigation.navigate('Detail', {product: item});
  };

  render() {
    return (
      <View
        data={this.state.data}
        loading={this.state.loading}
        onDetail={this.onDetail}
      />
    );
  }
}

export default List;

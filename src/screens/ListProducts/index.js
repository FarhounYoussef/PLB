import React from 'react';
import View from './view';

const DATA = [
  {
    id: 1,
    product: 'Apple iPhone 13 Pro Max (1 to) - Vert Alpin',
    description:
      'Écran Super Retina XDR 6,7 pouces avec ProMotion pour plus de rapidité et de réactivité',
    prix: 1500,
    stock: 0,
    image: 'https://m.media-amazon.com/images/I/611ovP2GkrL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    product: 'Clé USB 3.0 SanDisk Ultra 128 Go',
    description: `Jusqu'à 10 fois plus rapide que les clés USB 2.0 standard
      Transférez un film entier en moins de 40 secondes`,
    prix: 29.99,
    stock: 398,
    image: 'https://m.media-amazon.com/images/I/61TuPtmTScL._AC_SL1500_.jpg',
  },
  {
    id: 3,
    product: 'Montre Connectée Homme Femme 1.69',
    description:
      'Smartwatch Sport Moniteur de Fréquence Cardiaque Sommeil Montre Intelligente Podometre Calories, Etanche IP68',
    prix: 277,
    stock: 56,
    image: 'https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_SL1500_.jpg',
  },
  {
    id: 4,
    product: 'Chargeur Secteur Rapide 20W',
    description:
      'Chargeur Secteur Rapide 20W Compatible avec iPhone 13/13 Pro/13 Mini/13 Pro max/12/12 Mini/12 Pro/12 Pro Max /11/11 Pro/11 Pro Max/X/XS/XS Max/XR/SE 2020/8/8 Plus Phonillico',
    prix: 19.99,
    stock: 400,
    image: 'https://m.media-amazon.com/images/I/41kmtzZGqFL._AC_SL1234_.jpg',
  },
];

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch('http://192.168.86.27:3000/products')
      .then(response => response.json())
      .then(result => {
        this.setState({data: result, loading: false});
      });
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

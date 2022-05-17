import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

class Detail extends React.Component {
  render() {
    const {image, product, prix, description, stock} = this.props.data;
    return (
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.productDetail}>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product}</Text>
            <Text>{prix}</Text>
          </View>
          <View style={styles.description}>
            <Text>{description}</Text>
          </View>
          <Text style={styles.stock}>{stock}</Text>
        </View>
      </View>
    );
  }
}

export default Detail;

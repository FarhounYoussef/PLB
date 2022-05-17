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
          <Text style={styles.productName}>{product}</Text>
          <Text style={styles.priceText}>{prix}$</Text>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text
            style={[
              styles.stock,
              stock > 0 ? styles.stockIn : styles.stockOut,
            ]}>
            {stock > 0 ? 'En stock' : 'Indiponible'}
          </Text>
        </View>
      </View>
    );
  }
}

export default Detail;

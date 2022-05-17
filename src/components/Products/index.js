import React from 'react';
import {FlatList, View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

class Products extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              this.props.onSelect(item);
            }}>
            <View style={styles.container}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.productDetail}>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.product}</Text>
                  <Text style={styles.priceText}>{item.prix}$</Text>
                </View>
                <View style={styles.description}>
                  <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
                <Text
                  style={[
                    styles.stock,
                    item.stock > 0 ? styles.stockIn : styles.stockOut,
                  ]}>
                  {item.stock > 0 ? 'En stock' : 'Indiponible'}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    );
  }
}

export default Products;

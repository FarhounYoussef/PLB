import React from 'react';
import {FlatList, View, Text, Image, StyleSheet, Pressable} from 'react-native';

class ProductLits extends React.Component {
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
                  <Text>{item.prix}</Text>
                </View>
                <View style={styles.description}>
                  <Text>{item.description}</Text>
                </View>
                <Text style={styles.stock}>{item.stock}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // height: 80,
  },
  image: {
    height: 80,
    width: 80,
  },
  productDetail: {
    flex: 1,
  },
  productInfo: {
    flexDirection: 'row',
  },
  productName: {
    flex: 1,
  },
  description: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stock: {
    textAlign: 'right',
  },
});

export default ProductLits;

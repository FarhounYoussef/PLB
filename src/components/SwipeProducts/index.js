import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../utils/constants';

import styles from './styles';

const Products = ({data, onSelect, onAddFavorite, onRemoveFavorite}) => {
  return (
    <SwipeListView
      data={data}
      keyExtractor={item => item.id}
      rightOpenValue={-75}
      disableRightSwipe={true}
      renderHiddenItem={({item}) => (
        <View style={styles.hiddenContainer}>
          <Pressable
            style={styles.hiddenAction}
            onPress={() => {
              item.isFavorite ? onRemoveFavorite(item) : onAddFavorite(item);
            }}>
            <Icons
              name={item.isFavorite ? 'heart-outline' : 'heart'}
              color={COLORS.WHITE}
              size={25}
            />
            <Text style={styles.hiddenActionLabel}>
              {item.isFavorite ? 'Supprimer du favoris' : 'Ajouter au favoris'}
            </Text>
          </Pressable>
        </View>
      )}
      renderItem={({item}) => (
        <Pressable
          onPress={() => {
            onSelect(item);
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
};

export default Products;

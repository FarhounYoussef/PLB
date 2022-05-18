import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ActivityIndicator} from 'react-native';
import Products from '../../components/SwipeProducts';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from '../../app/actions';
import {useNavigation} from '@react-navigation/native';

const List = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [search, setSeach] = useState('');
  const [filtedData, setFiltedData] = useState(props.data);

  useEffect(() => {
    setFiltedData(props.data);
  }, [props.data]);

  useEffect(() => {
    navigation.setOptions({
      title: `List Produit (${filtedData.length})`,
    });
  }, [filtedData]);

  const filterProducts = () => {
    const newData = props.data.filter(produit =>
      produit.product.includes(search),
    );
    setFiltedData(newData);
  };

  const onDetail = item => {
    navigation.navigate('Create', {product: item});
  };

  const onAddFavorite = item => {
    dispatch(addFavorite(item));
  };

  const onRemoveFavorite = item => {
    dispatch(removeFavorite(item));
  };

  const onCreate = () => {
    navigation.navigate('Create');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <Input value={search} onChangeText={setSeach} />
        <Button title={'Search'} onPress={filterProducts} />
      </View>
      {props.loading && <ActivityIndicator />}
      {!props.loading && (
        <Products
          data={filtedData}
          onSelect={onDetail}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      )}
      <View style={styles.footer}>
        <Button title="Add product" onPress={onCreate} />
      </View>
    </SafeAreaView>
  );
};

export default List;

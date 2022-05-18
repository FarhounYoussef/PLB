import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ActivityIndicator} from 'react-native';
import Products from '../../components/Products';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';

const List = props => {
  const [search, setSeach] = useState('');
  const [filtedData, setFiltedData] = useState(props.data);

  useEffect(() => {
    setFiltedData(props.data);
  }, [props.data]);

  const filterProducts = () => {
    const newData = props.data.filter(produit =>
      produit.product.includes(search),
    );
    setFiltedData(newData);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <Input value={search} onChangeText={setSeach} />
        <Button title={'Search'} onPress={filterProducts} />
      </View>
      {props.loading && <ActivityIndicator />}
      {!props.loading && (
        <Products data={filtedData} onSelect={props.onDetail} />
      )}
    </SafeAreaView>
  );
};

export default List;

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import Products from '../../components/Products';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const List = props => {
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
    navigation.navigate('Detail', {product: item});
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <Input value={search} onChangeText={setSeach} />
        <Button title={'Search'} onPress={filterProducts} />
      </View>
      <Products data={filtedData} onSelect={onDetail} />
    </SafeAreaView>
  );
};

export default List;

import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';
import {useRoute} from '@react-navigation/native';

const List = () => {
  const {
    params: {product},
  } = useRoute();
  const [state, setState] = useState(product || {});

  const onChange = field => value => setState({...state, [field]: value});

  const addImage = () => {};

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{uri: state.image}} />
        <TouchableOpacity style={styles.pickImage} onPress={addImage}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Input
        label={'Nom du produit'}
        style={styles.input}
        value={state.product}
        onChangeText={onChange('product')}
      />
      <Input
        label={'Description du produit'}
        style={styles.input}
        value={state.description}
        onChangeText={onChange('description')}
      />
      <Input
        label={'Stock'}
        style={styles.input}
        value={`${state.stock}`}
        onChangeText={onChange('stock')}
      />
      <Input
        label={'Prix'}
        style={styles.input}
        value={`${state.prix}`}
        onChangeText={onChange('prix')}
      />

      <View style={styles.footer}>
        <Button title="Add product" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default List;

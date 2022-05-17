import React from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import ProductLits from './ProductList';
import styles from './styles';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'test',
      filtedData: props.data,
    };
  }

  filterProducts = () => {
    const newData = this.props.data.filter(produit =>
      produit.product.includes(this.state.search),
    );
    this.setState({filtedData: newData});
  };

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            value={this.state.search}
            onChangeText={_value => {
              this.setState({search: _value});
            }}
          />
          <TouchableOpacity style={styles.button} onPress={this.filterProducts}>
            <Text style={styles.searchTitle}>Search</Text>
          </TouchableOpacity>
        </View>
        {this.props.loading && <ActivityIndicator />}
        {!this.props.loading && (
          <ProductLits
            data={this.state.filtedData}
            onSelect={this.props.onDetail}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default List;

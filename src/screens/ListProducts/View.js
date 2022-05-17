import React from 'react';
import {SafeAreaView, View, ActivityIndicator} from 'react-native';
import Products from '../../components/Products';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filtedData: props.data,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.filtedData) {
      return {
        filtedData: props.data,
      };
    }
    return null;
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
          <Input
            value={this.state.search}
            onChangeText={_value => {
              this.setState({search: _value});
            }}
          />
          <Button title={'Search'} onPress={this.filterProducts} />
        </View>
        {this.props.loading && <ActivityIndicator />}
        {!this.props.loading && (
          <Products
            data={this.state.filtedData}
            onSelect={this.props.onDetail}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default List;

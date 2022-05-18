import React, {useEffect} from 'react';
import {useAPI} from '../../hooks';
import View from './view';
import {connect} from 'react-redux';
import ACTIONS from '../../app/constante';

const List = props => {
  const [getData, {data, loading}] = useAPI(
    'https://edb5-196-127-7-74.ngrok.io/products',
  );

  useEffect(() => {
    props.setProducts(data);
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return <View data={data} loading={loading} />;
};

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProducts: products => dispatch({type: ACTIONS.ADD_PRODUCTS, products}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

import React, {useEffect} from 'react';
import {useAPI} from '../../hooks';
import View from './view';
import {getProducts} from '../../app/actions';
import {useSelector, useDispatch} from 'react-redux';

const List = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [getData, {data, loading}] = useAPI(
    'https://edb5-196-127-7-74.ngrok.io/products',
  );

  useEffect(() => {
    dispatch(getProducts(data));
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return <View data={data} loading={loading} />;
};

export default List;

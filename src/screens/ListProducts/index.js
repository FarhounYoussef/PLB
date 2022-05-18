import React, {useEffect} from 'react';
import View from './view';
import {fetchProducts} from '../../app/actions';
import {useSelector, useDispatch} from 'react-redux';

const List = () => {
  const {data, loading} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <View data={data} loading={loading} />;
};

export default List;

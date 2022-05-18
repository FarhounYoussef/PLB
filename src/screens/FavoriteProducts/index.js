import React from 'react';
import View from './view';
import {useSelector} from 'react-redux';

const List = () => {
  const data = useSelector(state =>
    state.products.data.filter(({id}) => state.favorites.includes(id)),
  );

  return <View data={data} />;
};

export default List;

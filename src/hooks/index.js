import {useEffect, useState} from 'react';
import {AppState} from 'react-native';

export const useFiltredData = DATA => {
  const [filtedData, setFiltedData] = useState(DATA);

  const onFilter = search => {
    const newData = DATA.filter(produit => produit.product.includes(search));
    setFiltedData(newData);
  };

  return {filtedData, onFilter};
};

export const useAppState = () => {
  useEffect(() => {
    // componentDidMount
    const subscription = AppState.addEventListener('change', nextAppState => {
      console.log('nextAppState', nextAppState);
    });
    return () => {
      subscription.remove();
    };
  }, []);
};

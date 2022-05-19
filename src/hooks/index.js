import {useEffect, useState, useContext} from 'react';
import {AppState} from 'react-native';
import {Context} from '../contexts/user';

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

export const useAPI = url => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getData = () => {
    setLoading(true);
    fetch(url)
      .then(result => result.json())
      .then(result => {
        setData(result);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return [getData, {loading, data, error}];
};

export const useUserInfo = () => {
  const values = useContext(Context);

  return values;
};

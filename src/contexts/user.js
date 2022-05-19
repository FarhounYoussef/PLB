import React, {createContext, useState} from 'react';
export const Context = createContext('user');

const initialState = {
  user: {
    id: 'user1',
    firstName: 'test1',
    lastName: 'test',
  },
};

export default WrappedConmponent => {
  const WithUserInfo = props => {
    const [state, setState] = useState(initialState);

    const setUser = value => {
      setState({...state, user: value});
    };

    return (
      <Context.Provider
        value={{
          user: state.user,
          setUser,
        }}>
        <WrappedConmponent {...props} />
      </Context.Provider>
    );
  };
  return WithUserInfo;
};

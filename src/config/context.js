import React from 'react';
import stores from '../stores';

const StoreContext = React.createContext();

export const MobxProvider = ({children}) => {
  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used with a StoreProvider');
  }
  return store;
};

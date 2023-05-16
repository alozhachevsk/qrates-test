import storage from 'redux-persist/es/storage';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['catalog'],
};

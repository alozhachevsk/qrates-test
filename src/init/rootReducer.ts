import { combineReducers } from 'redux';

import catalog from 'modules/Catalog/reducers/catalog';

export const reducer = combineReducers({
  catalog,
});

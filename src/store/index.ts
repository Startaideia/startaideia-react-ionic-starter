import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/* Store reducers */
import appReducer from "./app/app.reducer";

const reducers = combineReducers({
  app: appReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools({ trace: true })(applyMiddleware(thunk))
);

export default store;

/* Exports actions */
export { default as appActions } from "./app/app.actions";

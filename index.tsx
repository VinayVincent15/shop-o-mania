import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import homeReducer from './store/reducers/home';
import cartReducer from './store/reducers/cart';
import App from './App';

const reducer = combineReducers({
  home: homeReducer,
  cart: cartReducer,
})

const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


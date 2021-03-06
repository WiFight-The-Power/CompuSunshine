import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import productsReducer from "./products";
import productReducer from "./product";
import cartReducer from "./cart";
import adminProductsReducer from "./adminproducts";
import usersReducer from "./users";
import orderReducer from "./order";
import ordersReducer from "./orders";
import userReducer from "./user";

const reducer = combineReducers({
  auth,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  adminproducts: adminProductsReducer,
  users: usersReducer,
  order: orderReducer,
  orders: ordersReducer,
  user: userReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })),
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";

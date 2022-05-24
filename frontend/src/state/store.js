import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension'


const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(reducers, composeEnhancers);


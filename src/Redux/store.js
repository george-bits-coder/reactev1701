import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as AdminReducer } from "../Features/Admin/reducer";
import { reducer as UserReducer } from "../Features/User/reducer";
//import { reducer as CompanyReducer } from "../Features/Company/reducer";

import thunk from "redux-thunk";

const Rootreducer = combineReducers({
  adminState: AdminReducer,
  userState: UserReducer
});

export const Store = createStore(Rootreducer, applyMiddleware(thunk));

import { combineReducers } from "redux";
import actions from "./actions";

export const fooBar = (state = { foo: {} }, action: any) => {
  switch (action.type) {
    case actions.FOO_BAR:
      state = Object.assign({}, state, {
        bar: action.payload
      });
      break;
  }
  return state;
};

export default combineReducers({
  fooBar
});
import actions from "./actions";

export interface FooBarAction {
  type: actions.FOO_BAR;
  payload: any;
}
  
  export function addFooBar(nav: any): FooBarAction {
  return {
    type: actions.FOO_BAR,
    payload: nav
  };
}
  

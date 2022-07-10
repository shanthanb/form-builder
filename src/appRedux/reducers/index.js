import { connectRouter } from "connected-react-router";
import Forms from "./forms";
import { combineReducers } from "redux";
import common from "./common";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    forms: Forms,
    common: common,
  });

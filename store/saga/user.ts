import { Action, ActionCreator } from "redux";
import { ActionPattern, all, takeLatest } from "redux-saga/effects";
import { setMeData } from "../reducers/user";

function* setData(action: any) {
  return action;
}
export default function* root() {
  yield all([takeLatest(setMeData.type, setData)]);
}

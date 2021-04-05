
import * as actionType from "../actions/actionType";
import { HistoryActionType, HistoryStateModal } from "./dataModal";

const initialState: HistoryStateModal = {
  records: [],
  isLoading: false,
};

const historyReducer = (state: HistoryStateModal = initialState, action: HistoryActionType) => {
  switch (action.type) {
    case actionType.GETHISTORY:
      return {
        ...state,
        ...action.payload,
      };
    case actionType.UPDATELOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default historyReducer;

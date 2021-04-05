
import * as actionType from "../actions/actionType";
import { EntitiesStateModal, EntityActionType } from "./dataModal";

const initialState: EntitiesStateModal = {
  entities: [],
};

const entitiesReducer = (state = initialState, action: EntityActionType) => {
  switch (action.type) {
    case actionType.GETENTITIES:
      return {
        ...state,
        ...action.payload,
      };
    case actionType.UPDATENTITY:
      return {
        ...state,
        selectedEntity: action.payload
      };
    default:
      return state;
  }
};

export default entitiesReducer;

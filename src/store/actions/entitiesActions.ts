import axios from "../../shared/axios";
import { EntitiesStateModal, EntityModal } from "../reducers/dataModal";
import * as actiontype from "./actionType";

const saveEntities = (data: EntitiesStateModal) => ({
  type: actiontype.GETENTITIES,
  payload: { ...data },
});

export const getEntities = () => {
  return (dispatch: any) => {
    axios
      .get("titles.json")
      .then((res) => {
        return dispatch(saveEntities({ entities: res.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateCurrentEntity = (data: EntityModal) => ({
  type: actiontype.UPDATENTITY,
  payload: data,
});
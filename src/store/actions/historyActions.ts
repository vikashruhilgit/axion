import axios from "../../shared/axios";
import { HistoryStateModal } from "../reducers/dataModal";
import * as actiontype from "./actionType";

const saveHistory = (data: HistoryStateModal) => ({
  type: actiontype.GETHISTORY,
  payload: { ...data },
});

export const getHistory = () => {
  return (dispatch: any) => {
    axios
      .get("AAPL.json")
      .then((res) => {
        return dispatch(saveHistory({ records: res.data, isLoading: false }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateLoading = (status: boolean) => ({
  type: actiontype.UPDATELOADING,
  payload: status,
});
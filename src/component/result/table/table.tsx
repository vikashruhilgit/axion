import { parseAsNumber } from "../../../shared/utility";
import {
  HistoryModal,
  HistoryStateModal,
} from "../../../store/reducers/dataModal";

import classes from "./table.module.scss";

const renderRows = (data: HistoryModal[]) => {
  return data.map((single, i) => (
    <tr key={i}>
      <td>{single.Date}</td>
      <td>{parseAsNumber(single.Open.toString())}</td>
      <td>{parseAsNumber(single.High.toString())}</td>
      <td>{parseAsNumber(single.Low.toString())}</td>
      <td>{parseAsNumber(single.Close.toString())}</td>
      <td>{parseAsNumber(single["Adj Close"].toString())}</td>
      <td>{single.Volume}</td>
    </tr>
  ));
};

const TableStructure = (props: HistoryStateModal) => {
  return (
    <div className={classes.Wrapper}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Adj Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>{renderRows(props.records)}</tbody>
      </table>
    </div>
  );
};

export default TableStructure;

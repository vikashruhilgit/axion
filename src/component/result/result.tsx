import { useState } from "react";
import { useSelector } from "react-redux";
import {
  baseStateModal,
  EntityModal,
  HistoryStateModal,
} from "../../store/reducers/dataModal";
import Loader from "../../UI/loader/loader";
import CardStructure from "./cards/cards";

import classes from "./result.module.scss";
import TableStructure from "./table/table";

const Result = () => {
  const [tableView, setTableView] = useState<boolean>(true);

  const historyData: HistoryStateModal = useSelector(
    (state: baseStateModal) => state.historyState
  );

  const currentEntity = useSelector(
    (state: baseStateModal) => state.entitiesState.selectedEntity
  );

  const toggleView = () => {
    setTableView(!tableView);
  };

  return (
    <section className={classes.Wrapper}>
      {historyData.records.length === 0 && historyData.isLoading === false ? (
        <div>No data avilable, Please type your desired search.</div>
      ) : historyData.isLoading === true ? (
        <Loader></Loader>
      ) : (
        <div className={classes.dataContainer}>
          <div className={classes.entityHeader}>
            <div className={classes.headingWrapper}>
              <p className={classes.heading}>{currentEntity?.code}</p>
              <p className={classes.headingLine}>{currentEntity?.title}</p>
            </div>
            <div onClick={toggleView} className={classes.toggle}>
              Toggle View
            </div>
          </div>
          {tableView === true ? (
            <TableStructure {...historyData}></TableStructure>
          ) : (
            <CardStructure {...historyData}></CardStructure>
          )}
        </div>
      )}
    </section>
  );
};

export default Result;

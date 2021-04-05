import { parseAsNumber } from "../../../shared/utility";
import {
  HistoryModal,
  HistoryStateModal,
} from "../../../store/reducers/dataModal";

import classes from "./cards.module.scss";

const renderCard = (data: HistoryModal[]) => {
  return data.map((single, i) => (
    <div key={i} className={classes.container}>
      <div className={classes.topRow}>
        <div className={classes.mainleft}>
          <p className={classes.main}>
            {parseAsNumber(single.Close.toString())}
          </p>
          <p className={classes.date}>{single.Date}</p>
        </div>
        <div className={classes.mainRight}>
          <p className={classes.label}>VOLUME</p>
          <p className={classes.val}>{single.Volume}</p>
        </div>
      </div>
      <div className={classes.bottomRow}>
        <div className={classes.bottomRowLeft}>
          <p className={classes.label}>OPEN/ADJ CLOSE</p>
          <p className={classes.val}>
            {parseAsNumber(single.Open.toString())}/
            {parseAsNumber(single["Adj Close"].toString())}
          </p>
        </div>
        <div className={classes.bottomRowRight}>
          <p className={classes.label}>DAY RANGE</p>
          <p className={classes.val}>
            {parseAsNumber(single.Low.toString())} -{" "}
            {parseAsNumber(single.High.toString())}
          </p>
        </div>
      </div>
    </div>
  ));
};

const CardStructure = (props: HistoryStateModal) => {
  return <div className={classes.Wrapper}>{renderCard(props.records)}</div>;
};

export default CardStructure;

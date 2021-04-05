import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentEntity } from "../../../store/actions/entitiesActions";
import {
  getHistory,
  updateLoading,
} from "../../../store/actions/historyActions";
import { EntityModal } from "../../../store/reducers/dataModal";
import { ItemProp } from "./item.modal";

import classes from "./item.module.scss";

const Item = (props: ItemProp) => {
  const regex = new RegExp(props.searchKey, "i");

  const clickHandler = (selectedItem: EntityModal) => {
    props.closeSearch();
    processReq(selectedItem);
  };

  const entities: EntityModal[] = useSelector((state: any) => {
    return state.entitiesState.entities.filter((single: EntityModal) => {
      return regex.test(single.code);
    });
  });

  const dispatch = useDispatch();

  const processReq = useCallback(
    (data) => {
      dispatch(updateCurrentEntity(data));
      dispatch(updateLoading(true));
      dispatch(getHistory());
    },
    [dispatch]
  );

  const renderList = () => {
    return entities.map((single: EntityModal) => (
      <li key={single.code} onClick={() => clickHandler(single)}>
        <section className={classes.container}>
          <div className={classes.left}>
            <p className={classes.code}>{single.code}</p>
            <p className={classes.title}>{single.title}</p>
          </div>
          <div className={classes.right}>{"Equity - " + single.link}</div>
        </section>
      </li>
    ));
  };

  return (
    <div className={classes.SearchResult}>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default Item;

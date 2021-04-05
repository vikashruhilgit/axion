import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEntities } from "../../store/actions/entitiesActions";
import Item from "./item/item";

import classes from "./search.module.scss";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const [showResult, setshowResult] = useState(false);

  const handleInput = (e: any) => {
    setSearchVal(e.target.value);
  };

  const handleFocus = () => {
    setshowResult(true);
  };

  const handleBlur = useCallback(() => {
    setshowResult(false);
  }, []);

  const dispatch = useDispatch();

  const getEntitiesData = useCallback(() => dispatch(getEntities()), [
    dispatch,
  ]);

  useEffect(() => {
    getEntitiesData();
  }, [getEntitiesData]);

  /* useEffect(() => {
    document.addEventListener("mousedown", handleBlur);
    return () => document.removeEventListener("mousedown", handleBlur);
  }, []); */

  return (
    <section className={classes.Wrapper}>
      <input
        onFocus={handleFocus}
        //onBlur={handleBlur}
        type="text"
        value={searchVal}
        onInput={handleInput}
        placeholder="Quote Lookup"
      ></input>
      {showResult && searchVal ? (
        <Item searchKey={searchVal} closeSearch={handleBlur}></Item>
      ) : null}
    </section>
  );
};

export default Search;

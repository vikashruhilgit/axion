import Search from "./component/search/search";
import Result from "./component/result/result";
import Layout from "./UI/layout/layout";

import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Search></Search>
        <Result></Result>
      </Layout>
    </div>
  );
}

export default App;

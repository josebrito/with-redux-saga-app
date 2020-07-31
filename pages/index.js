import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../store";
import { loadData, startClock, tickClock, loadData2 } from "../actions";
import withCenas from "../components/withCenas";
import withCenasSSP from "../components/withCenasSSP";

const Index = () => {
  const dispatch = useDispatch();
  const placeholderData = useSelector((state) => state.placeholderData);
  const moreData = useSelector((state) => state.moreData);

  // useEffect(() => {
  //   dispatch(loadData());
  // }, []);

  return (
    <div>
      <h1>hello</h1>
      <p>world</p>
      <p>{JSON.stringify(moreData || {})?.substr(0, 100)}</p>
      <p>{JSON.stringify(placeholderData || {})?.substr(0, 100)}</p>
    </div>
  );
};

/*
Index.getInitialProps = async ({ store }) => {
  console.log("## INDEX getInitialProps");

  store.dispatch(loadData());

  // store.dispatch(END);
  // await store.sagaTask.toPromise();

  console.log("## INDEX getInitialProps - END");
};
*/

export const getServerSideProps = withCenasSSP(
  wrapper.getServerSideProps(async ({ store, req, res, ...etc }) => {
    console.log("## INDEX getServerSideProps");

    store.dispatch(loadData());

    store.dispatch(END);
    await store.sagaTask.toPromise();

    console.log("## INDEX getServerSideProps - END");

    return { props: {} };
  })
);

export default withCenas(Index);

import { wrapper } from "../store";
import { loadData2 } from "../actions";
import { END } from "redux-saga";

export default function withCenasSSP(getServerSidePropsFunc) {
  return wrapper.getServerSideProps(async (context) => {
    const { store } = context;

    console.log("## withCenasSSP getServerSideProps");

    store.dispatch(loadData2());
    store.dispatch(END);
    await store.sagaTask.toPromise();

    if (getServerSidePropsFunc) {
      return {
        props: { data: await getServerSidePropsFunc(context) },
      };
    }

    console.log("## withCenasSSP getServerSideProps END");

    return { props: {} };
  });
}

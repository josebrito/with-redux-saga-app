import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../store";
import { loadData, startClock, tickClock, loadData2 } from "../actions";
import Page from "../components/page";

function withCenas(WrappedComponent) {
  class CenasHOC extends React.Component {
    /*
    static getInitialProps = async (ctx) => {
      let pageProps = {};
      const { store } = ctx;

      console.log("## withCenas getInitialProps");

      store.dispatch(loadData2());

      //store.dispatch(END);
      // This is not feasible in our project, because sagaTask gets overwritten with injectSagas/injectReducers
      //await store.sagaTask.toPromise();

      console.log("## withCenas getInitialProps - END", store.getState());

      if (WrappedComponent.getInitialProps) {
        pageProps = await WrappedComponent.getInitialProps(ctx);
      }
      return pageProps;
    };
    */

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return CenasHOC;
}

export default withCenas;

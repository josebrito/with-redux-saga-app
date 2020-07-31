import { wrapper } from "../store";
import { END } from "redux-saga";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/*
App.getInitialProps = async ({ Component, ctx }) => {
  console.log("## APP getInitialProps");

  // 1. Wait for all page actions to dispatch
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  // 2. Stop the saga if on server
  //
  // This will wait for all sagas to complete,
  // so it should be the ONLY place where we dispatch "END" task
  //
  if (ctx.req) {
    console.log("## APP getInitialProps - END WITH SAGA");
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
  }

  console.log("## APP getInitialProps - END");

  return { pageProps };
};
*/

export default wrapper.withRedux(App);

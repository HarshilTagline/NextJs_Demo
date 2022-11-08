import '../styles/globals.css'
import Layout from "../components/layouts/header/index";
import { CartContextProvider } from "../context/cartContext";
import { store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </Provider>
  );
}

export default MyApp;

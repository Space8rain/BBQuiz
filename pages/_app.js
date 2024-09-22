import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <style jsx global>
        {`
          html {
            font-family: Lato
          }
        `}
      </style>
      <Component {...pageProps} />
    </Provider>
)
}

export default MyApp

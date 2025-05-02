// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux';
// import { store } from './redux/store/store';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { CartProvider } from './context/CartContext'; // Import your CartProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider> {/* Wrap the app with CartProvider */}
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);

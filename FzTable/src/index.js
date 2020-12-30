import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ViewportProvider } from './useViewport'



ReactDOM.render(
  <React.StrictMode>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </React.StrictMode>,
  document.getElementById("root")
);



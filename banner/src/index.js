import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App
      openAtStart={true}
      autoToggle={1000}
      button={{
        closeText: "收收",
        openText: "開開",
        class:"999"
      }}
      classStatus={{
        closed: "closed1",
        closing: "closing1",
        opened: "opened1",
        opening: "opening1",
      }}
      transition={true}
      whenTransition={function () {
        console.log("111");
      }}
      command={"close"} //close togle  open
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import "./App.css";
import React, { useState, useEffect, useRef, Fragment } from "react";
import classNames from "classnames";

function App(props) {
  const {
    openAtStart,
    autoToggle,
    button,
    classStatus,
    transition,
    whenTransition,
    command,
  } = props;

  const [switchStatus, setSwitchStatus] = useState(openAtStart);
  const [varStatus, setVarStatus] = useState("");

  const { opened, closed, opening, closing } = classStatus;

  //didmount
  useEffect(() => {
    handleBtnToggle();
  }, []);

  //didupdate
  useEffect(() => {
    changeClsName(switchStatus);
  }, [switchStatus]);

  useEffect(() => {
    commandExecution(command);
  }, [command]);

  function commandExecution(command) {
    switch (command) {
      case "close":
        setSwitchStatus(false);
        break;
      case "open":
        setSwitchStatus(true);
        break;
      case "toggle":
        handleBtnToggle();
    }
  }

  function handleBtnToggle() {
    if (switchStatus) {
      setSwitchStatus(false);
    } else {
      setSwitchStatus(true);
    }
  }

  //依照開或關狀態，延遲autoToggle秒後改變類狀態
  function changeClsName(switchStatus) {
    //改變類名
    if (switchStatus) {
      setTimeout(() => {
        setClassName(opening);
        let transitionAction = setInterval(whenTransition, 100);
        setTimeout(() => {
          clearInterval(transitionAction);
          setVarStatus(opened);
        }, 3000);
      }, autoToggle);
    } else {
      setTimeout(() => {
        setClassName(closing);
        let transitionAction = setInterval(whenTransition, 100);
        setTimeout(() => {
          clearInterval(transitionAction);
          setVarStatus(closed);
        }, 3000);
      }, autoToggle);
    }
  }

  function setClassName(status) {
    let classStr = classNames(status);
    setVarStatus(classStr);
  }

  return (
    <Fragment>
      <div
        // className={classForTransition + " " + varStatus}
        className={classNames(
          "img",
          { opened: switchStatus },
          { closed: !switchStatus },
          varStatus
        )}
        style={
          transition
            ? { transitionDelay: `${autoToggle / 1000}s` }
            : { transition: "unset" }
        }
      >
        <img src={"https://fakeimg.pl/1200x300/ADADAD?/text=1200x300"} />
        <img src={"https://fakeimg.pl/1200x80/?text=1200x80"} />
        <div className={`btn ${button.class}`} onClick={handleBtnToggle}>
          {switchStatus ? button.closeText : button.openText}
        </div>
      </div>
      <div className="command">
        <button
          onClick={() => {
            commandExecution("close");
          }}
        >
          關閉
        </button>
        <button
          onClick={() => {
            commandExecution("open");
          }}
        >
          開啟
        </button>
        <button
          onClick={() => {
            commandExecution("toggle");
          }}
        >
          切換
        </button>
      </div>
    </Fragment>
  );
}

export default App;

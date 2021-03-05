import './App.css';
import React, { Fragment, useReducer, useContext, useState} from "react";
import moment from 'moment'
import getWeeksInMonth from "./utils"
import reducers from "./reducers"



const weekDayNameList =
  ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

const Appstore = React.createContext()


export default function App(props) {
  const [calendarPatterns, setCalendarPattern] = useState(true); //true 月曆模式  false 列表模式
  const hightLightState = useState();

  const currentMmt = new moment();
  const timeReducer = useReducer(reducers, currentMmt.format("YYYY-MM-DD"));

  const { dataSource } = props;
  
  function a() {
    console.log('hi :>> ');
  }
  return (
    <Fragment>
      <Appstore.Provider
        value={{
          timeReducer,
          data: dataSource,
          calendarPatterns,
          hightLightState,
        }}
      >
        
        <div
          className="App__switchMode"
          onClick={() => {
            setCalendarPattern(!calendarPatterns);
          }}
        >
          切換{calendarPatterns ? "列表" : "日曆"}顯示
        </div>
        <div className="App__calenderWrapper">
          <MonthBar />
          <DateContent />
        </div>
      </Appstore.Provider>
    </Fragment>
  );
}



function MonthBar() {
  const { timeReducer }  = useContext(Appstore);
  const [dateInfo, dispatch] = timeReducer; 

  let thisPageYear = parseInt(dateInfo.slice(0, 4))
  let thisPageMonth = parseInt(dateInfo.slice(5,7)) 
  
  return (
    <div className="MonthBar__monthBar">
      <span
        className="MonthBar__lastMonth"
        onClick={() => dispatch({ type: "LAST_MONTH" })}
      >
        {thisPageMonth - 1 === 0 ? `${thisPageYear - 1}年12月` : `${thisPageYear}年${thisPageMonth - 1}月`}
      </span>
      <span className="MonthBar__currentMonth">
        {thisPageYear}年{thisPageMonth}月
      </span>
      <span
        className="MonthBar__nextMonth"
        onClick={() => dispatch({ type: "NEXT_MONTH" })}
      >
        {thisPageMonth + 1 === 13 ? `${thisPageYear + 1}年1月` : `${thisPageYear}年${thisPageMonth + 1}月`}
      </span>
    </div>
  );
}



function DateContent() {
  
  const { timeReducer, calendarPatterns, hightLightState } = useContext(Appstore);
  const { data } = useContext(Appstore);
  const [date, dispatch] = timeReducer
  const [hightLight, setHightLight] = hightLightState


  const mmt = new moment(date)
  
  let weekContentList = getWeeksInMonth(mmt);
  

  //日曆模式顯示
  if (calendarPatterns) {
    if (weekContentList.length === 5) {
      weekContentList.push(Array(7).fill(0));
    }
    let displayHtml = [];
    return (
      <Fragment>
        <div className="DateContent__weekBar">
          {
            weekDayNameList.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))
          }
        </div>
        <div className="DateContent__dateContainer">
          {weekContentList.map((week, idx) => {
            let aWeek = [];
            week.map((day, idx) =>
              aWeek.push(<DayContent day={day} idx={idx} />)
            );
            displayHtml.push(
              <div className="aWeek"  key={idx}>
                {aWeek}
              </div>
            );
          })}
          {displayHtml}
        </div>
      </Fragment>
    );
    //列表模式顯示
  } else {
    let thisMonthData = []
    let thisYear = date.split("-")[0]
    let thisMonth = date.split("-")[1]
    
    //存入月資料
    data.forEach(obj =>
    {
      if (obj.date.slice(0,4)==thisYear && obj.date.slice(5, 7) == thisMonth) {
        thisMonthData.push(obj);
      }     
    })

    return (<div>
      {thisMonthData.map((obj, idx) => {
        let mmt = new moment(obj.date)
        return (
          <div className="listItem" key={idx}  onClick={() => { setHightLight(idx) } }style={hightLight==idx? {border: '1px solid green'}:null}>
            <div className="left">
              <div className="date">{mmt.date()}</div>
              <div className="day">{weekDayNameList[mmt.day()]}</div>
            </div>
            <div className="middle">
             可賣: {obj.availableVancancy}
             團位: {obj.totalVacnacy}
            </div>
            <div className="right">
              <div className="status">
                {obj.status}
              </div>
              <div className="price">
                ${obj.price}
              </div>
            </div>
          </div>
        );
       })}
    </div>)
    
  }
}


function DayContent({ day }) {
  const { timeReducer, data, hightLightState } = useContext(Appstore);

  const [date, dispatch] = timeReducer
  const [hightLight, setHightLight] = hightLightState

  const DayContentStyle =
    hightLight == day
      ? { border: "1px solid green" }
      : { border: "solid 1px #E0E0E0" };
  
  //存入日資料
  const dateArr = date.split("-");
  let dayToAddZero = day
  if (day < 10) { dayToAddZero = `0${day}`;  }

  let dataShow = false
  let dayData = {}

  data.forEach(item => {
    if (item.date === `${dateArr[0]}/${dateArr[1]}/${dayToAddZero}`) {
      dataShow = true;
      dayData = item
    }
  })


  return (
    <div
      className="DayContent"
      onClick={() => { setHightLight(day) }}
      style={DayContentStyle}
    >
      {day === 0 ? " " : day}
      {dataShow ? (
        <div className="DayContent__dayRecard">
          <div className="DayContent__status">{dayData.status}</div>
          <div className="DayContent__availableVancancy">
            {`可賣:${dayData.availableVancancy}`}
          </div>
          <div className="DayContent__totalVacnacy">{`團位:${dayData.totalVacnacy}`}</div>
          <div className="DayContent__price">{`$${dayData.price}`}</div>
        </div>
      ) : null}
    </div>
  );
}




import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import dataJson from './json/data1.json'


const dataSource = dataJson

// const dataSource = 
//   [
//   {
//     guaranteed: false,
//     date: "2020/12/01",
//     price: 76263,
//     availableVancancy: 16,
//     totalVacnacy: 166,
//     status: "預定",
//   },
//   {
//     guaranteed: false,
//     date: "2020/12/13",
//     price: 762,
//     availableVancancy: 16,
//     totalVacnacy: 166,
//     status: "成團",
//   },
//   {
//     guaranteed: false,
//     date: "2020/11/09",
//     price: 81524,
//     availableVancancy: 10,
//     totalVacnacy: 164,
//     status: "預定",
//   },
//   {
//     guaranteed: false,
//     date: "2020/01/29",
//     price: 524,
//     availableVancancy: 10,
//     totalVacnacy: 16,
//     status: "額滿",
//   },
// ];


ReactDOM.render(
  <React.StrictMode>
    <App dataSource={dataSource}/>
  </React.StrictMode>,
  document.getElementById('root')
);



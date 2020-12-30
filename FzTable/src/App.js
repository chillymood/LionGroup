import React, { useState } from "react";
import tripData from "./tripData.json";
import {
  Row,
  Col,
  TrainSchedule,
  ArrowsNext,
  ArrowsLast,
  Cheaper,
} from "./style.js";

//FIXME分支修改測試

const RETURN_NUM = 7;

function App() {
  const [displayCellNumPerRow, setDisplayNumPerRow] = useState(
    tripData.displayCellNumPerRow
  );
  const [moveCellOnce, setMoveCellOnce] = useState(tripData.moveCellOnce);

  const [slideNum, setSlideNum] = useState(0);

  const [selectedRow, setSelectedRow] = useState();
  const [selectedCol, setSelectedCol] = useState();

  let htmlResult = [];

  //第一行是回程日期，依照數據資料顯示
  let firstRow = [
    <Col style={{ flexGrow: "0" }} content={true} color={true}>
      去程/回程
    </Col>,
  ];
  tripData.data[0].data.forEach((item, idx) => {
    firstRow.push(
      <Col
        collapse={displayCellNumPerRow + slideNum > idx ? null : "s"}
        appear={slideNum > idx ? "s" : null}
        color={true}
      >
        {item.date_tripEnd}
      </Col>
    );
  });

  htmlResult.push(<Row>{firstRow}</Row>);

  function showCrossedColor(rowIdx, colIdx) {
    setSelectedRow(rowIdx);
    setSelectedCol(colIdx);
  }

  function changePage(moveCellOnce) {
    setSlideNum(slideNum + moveCellOnce);
  }

  return (
    <TrainSchedule>
      {tripData.data.map((process, rowIdx) => {
        // 第二行起第一列
        let rowContent = [];
        rowContent.push(
          <Col style={{ flexGrow: "0" }} color={true}>
            {process.date}
          </Col>
        );
        //第二列

        process.data.map((item, colIdx) => {
          rowContent.push(
            <Col
              collapse={displayCellNumPerRow + slideNum > colIdx ? null : "s"}
              appear={slideNum > colIdx ? "s" : null}
              onClick={() => showCrossedColor(rowIdx, colIdx)}
              color={
                rowIdx === selectedRow || colIdx === selectedCol ? true : false
              }
              content={true}
            >
              {item.price}

              <div>{item.isTheCheapest ? "最便宜" : null}</div>
              <Cheaper show={item.isTheCheapest}></Cheaper>
            </Col>
          );
        });
        htmlResult.push(<Row>{rowContent}</Row>);
      })}

      {htmlResult}

      <ArrowsLast
        onClick={() => changePage(-Math.abs(moveCellOnce))}
        showArrows={slideNum < displayCellNumPerRow ? false : true}
      ></ArrowsLast>
      <ArrowsNext
        onClick={() => changePage(moveCellOnce)}
        showArrows={slideNum >= RETURN_NUM - 1 ? false : true}
      />
    </TrainSchedule>
  );
}

export default App;

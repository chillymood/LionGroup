import styled from "styled-components";

const media = {
  s: (styles) => `@media only screen and (max-width: 700px){
        ${styles}
    }`,
};

export const Row = styled.div`
  display: flex;
`;
export const Col = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  text-align: center;
  vertical-align: center;
  flex-grow: 1;
  border: 1px solid #eeeeee;
  ${(props) => props.collapse && media[props.collapse]("display:none;")}
  ${(props) => {
    console.log(props);
    return props.color && "background:#e1e2e4;";
  }}
  ${(props) => props.appear && media[props.appear]("display:none;")}

  ${(props) => props.content && "line-height:40px;"}

  div {
    position: absolute;
    color: #ff8e26;
    font-size: 8px;
    line-height: 8px;
    top: 1px;
    right: 30px;
  }
`;

//a && b 前面存在執行後面 前面不存在不執行後面

export const TrainSchedule = styled.div`
  position: relative;
  width: 700px;
  @media (max-width: 700px) {
    width: 95vw;
  }
`;

export const ArrowsNext = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 20px;
  height: 20px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: rotate(45deg);

  visibility: ${(props) => (props.showArrows ? "visible" : "hidden")};

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ArrowsLast = styled.div`
  position: absolute;
  top: 50%;
  left: 105px;
  width: 20px;
  height: 20px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: rotate(225deg);

  visibility: ${(props) => (props.showArrows ? "visible" : "hidden")};

  @media (min-width: 700px) {
    display: none;
  }
`;

export const Cheaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  margin-top: -2px;
  margin-left: -1px;
  border-style: solid;
  border-width: 20px 20px 0 0;
  border-color: #ffb700 transparent transparent transparent;

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

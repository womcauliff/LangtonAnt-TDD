import React from "react";
import classNames from "classnames";

const colorMap = {
  0: "black",
  1: "white"
};
function Cell({ colorValue, isAnt }) {
  return (
    <div className={classNames("cell", colorMap[colorValue], { ant: isAnt })}>
      {isAnt ? "X" : colorValue}
    </div>
  );
}

export default Cell;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Cell from "./Cell";
import LangtonAnt from "../LangtonAnt";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.langtonAnt = new LangtonAnt();
    const [initialGrid, antLocation] = this.langtonAnt.next();

    this.state = {
      initialGrid,
      antLocation,
      ticks: 0
    };
  }
  componentDidMount() {
    this.stopClock = this.startClock();
  }
  componentDidUpdate() {
    if (this.state.ticks === 20) {
      this.stopClock();
    }
  }
  componentWillUnmount() {
    this.stopClock();
  }
  startClock() {
    const intervalID = setInterval(() => {
      const [initialGrid, antLocation] = this.langtonAnt.next();
      this.setState(({ ticks }) => ({
        initialGrid,
        antLocation,
        ticks: ticks + 1
      }));
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }
  render() {
    const { initialGrid, antLocation, ticks } = this.state;
    const { x, y, dir } = antLocation;
    return (
      <div className="App">
        <h2>{ticks}</h2>

        <div className="container">
          {initialGrid.map((row, ri) => (
            <div key={ri} className="row">
              {row.map((cell, ci) => {
                if (x === ci && y === ri) {
                  // if the ant is located at this cell,
                  // render the sprite.
                  return <Cell key={ci} colorValue={cell} isAnt />;
                }

                return <Cell key={ci} colorValue={cell} />;
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

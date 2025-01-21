import React from "react";
import "./SortingVisualizer.css";

// Import sorting algorithms
import { bubbleSort } from "../algorithms/bubbleSort";
import { mergeSortTopDown } from "../algorithms/mergeSortTopDown";
import { mergeSortBottomUp } from "../algorithms/mergeSortBottomUp";
import { quickSort } from "../algorithms/quickSort";
import { insertionSort } from "../algorithms/insertionSort";

const NUMBER_OF_BARS = 128; // Total bars
const ANIMATION_SPEED_MS = 5; // Animation speed in ms

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      isButtonDisabled: false,
      color: "darkturquoise",
    };
  }

  // Generate a new array on component mount
  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      array.push(randomIntFromInterval(23, 600));
    }
    this.setState({ array });
  }

  async resetBarColors(color) {
    const bars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      bars[i].style.backgroundColor = color;
    }
    await new Promise((r) => setTimeout(r, ANIMATION_SPEED_MS));
  }

  async handleSort(algorithm) {
    this.resetBarColors("darkturquoise").then(() => disableButtons());
    await algorithm(this.state.array);
    this.resetBarColors("green").then(() => enableButtons());
  }

  render() {
    const { array, isButtonDisabled, color } = this.state;

    return (
      <div className="main">
        <div className="buttons">
          <button
            onClick={() => window.location.reload()}
            className="button"
            style={{ color }}
          >
            Generate New Array
          </button>
          <button
            onClick={() => this.handleSort(mergeSortTopDown)}
            className="button"
            disabled={isButtonDisabled}
            style={{ color }}
          >
            Merge Sort (Top Down)
          </button>
          <button
            onClick={() => this.handleSort(mergeSortBottomUp)}
            className="button"
            disabled={isButtonDisabled}
            style={{ color }}
          >
            Merge Sort (Bottom Up)
          </button>
          <button
            onClick={() => this.handleSort(quickSort)}
            className="button"
            disabled={isButtonDisabled}
            style={{ color }}
          >
            Quick Sort
          </button>
          <button
            onClick={() => this.handleSort(insertionSort)}
            className="button"
            disabled={isButtonDisabled}
            style={{ color }}
          >
            Insertion Sort
          </button>
          <button
            onClick={() => this.handleSort(bubbleSort)}
            className="button"
            disabled={isButtonDisabled}
            style={{ color }}
          >
            Bubble Sort
          </button>
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

// Helper functions
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function disableButtons() {
  const buttons = document.getElementsByClassName("button");
  for (let i = 1; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].style.color = "red";
  }
}

function enableButtons() {
  const buttons = document.getElementsByClassName("button");
  for (let i = 1; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].style.color = "darkturquoise";
  }
}

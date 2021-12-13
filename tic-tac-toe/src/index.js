import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  //no more render()
  return (
    //no more this.props and no more ()=> onClick(), instead onClick
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

/**
 * the best approach is to store the game’s state in the parent Board
 * component instead of in each Square.
 * The Board component can tell each Square what to display
 * by passing a prop
 * To collect data from multiple children,
 * or to have two child components communicate with each other,
 * you need to declare the shared state in their parent component instead.
 *  The parent component can pass the state back down to the children
 * by using props;
 * this keeps the child components in sync with each other
 * and with the parent component.
 */
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }
  renderSquare(i) {
    return (
      // Now we’re passing down two props from Board to Square:
      // value and onClick.
      // The onClick prop is a function that Square can call when clicked.
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  //The render method returns a description of what you want to see on the screen
  render() {
    const status = "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

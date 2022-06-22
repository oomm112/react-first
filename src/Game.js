import React from 'react';
import './index.css';
import {useNavigate} from 'react-router-dom'

function Square(props){
	return(
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
  renderSquare(i) {
    return (
	<Square
		value={this.props.squares[i]}
		onClick={() => this.props.onClick(i)}
	/>
	);
  }

  render() {
		const arrays = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8]
		];
		return (
			<div>
			{arrays?.map((i) => {
				return(
				<div className="board-row">
				{i.map((j) => {
					return(this.renderSquare(j));
				})}
				</div>
			);
			})}
			</div>
		);
  }
}


class Game extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			history: [{
				squares: Array(9).fill(null),
			}],
			xIsNext: true,
			turn: 0,
			rows: 3
		};
	}

	handleClick(i){
		const history = this.state.history.slice(0, this.state.turn+1);
		const current = history[history.length -1];
		const squares = current.squares.slice();
		if(calculateWinner(squares) || squares[i]){
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
				squares: squares,
			}]),
			xIsNext: !this.state.xIsNext,
			turn: history.length,
		});
	}

	jumpTo(step){
		this.setState({
			turn: step,
			xIsNext: (step & 2) === 0
		});
	}

  render() {
		const history = this.state.history;
		const current = history[this.state.turn];
		const winner = calculateWinner(current.squares);
		const turn = this.state.turn;

		const moves = history.map((step, move) => {
			const desc = move ?
			'Go to move #' + move:
			'Go to game start';
			return(
				<li key={move}>
					<button onClick={() => this.jumpTo(move)}>{desc}</button>
				</li>
			);
		});

		let status;
		let turn_text;
		if (winner){
			status = 'Winner: ' + winner;
		}else{
			if(turn == 9){
				status = 'Draw!';
			}else{
				status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
				turn_text = 'This is turn ' + (turn);
			}
		}

    return (
      <div className="game">
        <div className="game-board">
          <Board
						squares={current.squares}
						onClick={(i) => this.handleClick(i)}
					/>
					<h1>{turn_text}</h1>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================


function calculateWinner(squares){
	const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
	for (let i = 0; i < lines.length; i++){
		const [a, b, c] = lines[i];
		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
			return squares[a];
		}
	}
	return null;
}

export default Game;

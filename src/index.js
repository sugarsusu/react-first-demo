import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
 * 
 * 渲染单独的button
 * Square 现在是受控组件
 */

// class Square extends React.Component {
//   // 在所有含有构造函数的react组件中，构造函数必须以super（props）开头
//   // 删除构造函数，该组件不需要保存游戏的state
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }
//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick={()=> this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

/**
 * Square组件重写为函数组件
 *  组件中只包含一个render方法，并且不包含state时，使用函数组件会更简单
 */

 function Square(props) {
   return (
     <button className="square" onClick={props.onClick}>
       {props.value}
     </button>
   )
 }

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shoppping-list">
        <h1>Shopping List for { this.props.name }</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// 将所有square的state保存在board组建中
// 渲染九个方格
class Board extends React.Component {
  // 添加构造函数
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext, 
    });
  }
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} 
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner:' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

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


// 组成棋盘
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
        <div>
          <ShoppingList name="game"/>
        </div>
      </div>
    );
  }
}

// ========================================
// 最终渲染
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

/**
 * 
 * @param {stirng} squares 
 * 用该函数判断游戏胜出方
 */
function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
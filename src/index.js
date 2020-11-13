import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 渲染单独的button
class Square extends React.Component {
  // 在所有含有构造函数的react组件中，构造函数必须以super（props）开头
  // 删除构造函数，该组件不需要保存游戏的state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }
  render() {
    return (
      <button 
        className="square" 
        onClick={()=> this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
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

// 渲染九个方格
class Board extends React.Component {
  // 添加构造函数
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
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
    const status = 'Next player: X';

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

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 渲染单独的button
class Square extends React.Component {
  // 在所有含有构造函数的react组件中，构造函数必须以super（props）开头
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button 
        className="square" 
        onClick={()=> this.setState({value:'X'})}
      >
        {this.state.value}
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
  renderSquare(i) {
    return <Square value={i} />;
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
          <ShoppingList />
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

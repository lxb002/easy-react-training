/*
 * @Author: lxb
 * @Date: 2023-03-21 09:45:14
 * @LastEditors: lxb
 * @LastEditTime: 2023-03-21 15:28:03
 * @Description: 
 */
import './TicTacTocCss.css'
import { useState } from 'react';

 function Square({value,onSquareClick}){
    // const [value,setValue]=useState(null)
    // function handleClick(){
    //     setValue('X')
    // }
    return(
        <button className='square' onClick={onSquareClick}>{value}</button>
    )
}
export function TestTicTacToc({xIsNext, squares, onPlay}){
    const winner = calculateWinner(squares)
    let textString;
    function handleClick(i){
        const nextSquares = squares.slice()
        if(squares[i]|| winner){
            return;
        }
        if(xIsNext){
            nextSquares[i]='X'
        }else{
            nextSquares[i]='O'
        }
        onPlay(nextSquares)
    }
    if(winner){
        textString = '赢家: ' + winner;
    }else{
        textString = '下一个： ' + (xIsNext ? 'X' : 'O');
    }
    return(
        <>
            <div>{ textString }</div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)}></Square>
                <Square value={squares[1]} onSquareClick={()=>handleClick(1)}></Square>
                <Square value={squares[2]} onSquareClick={()=>handleClick(2)}></Square>
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={()=>handleClick(3)}></Square>
                <Square value={squares[4]} onSquareClick={()=>handleClick(4)}></Square>
                <Square value={squares[5]} onSquareClick={()=>handleClick(5)}></Square>
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={()=>handleClick(6)}></Square>
                <Square value={squares[7]} onSquareClick={()=>handleClick(7)}></Square>
                <Square value={squares[8]} onSquareClick={()=>handleClick(8)}></Square>
            </div>
        </>
    )
}
export default function Game(){
    // const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove]
    // const [squares, setSquares] = useState(Array(9).fill(null))
    function handlePlay(nextSquares){
        console.log(history,'l',history.slice(0,currentMove + 1))
        const nextHistory = [...history.slice(0,currentMove + 1),nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
        // setXIsNext(!xIsNext)
    }
    function jumpTo(index){
        // TODO
        setCurrentMove(index)
    }
    const moves = history.map((item,index)=>{
        let description;
        if(index > 0) {
            description = '到第' + index + '步'
        }else {
            description = '开始游戏！'
        }
        return (
            <li key={index}>
                <button onClick={()=>jumpTo(index)}>{description}</button>
            </li>
        )
    })
    return (
        <>
            <div className='game-container'>
                <div className='game-board'>
                    <TestTicTacToc xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></TestTicTacToc>
                </div>
                <div className='grame-info'>
                    <ul>{moves}</ul>
                </div>
            </div>
        
        </>
    )
}
function calculateWinner(squares){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i]
        if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares
            [c]){
                return squares[a];
            }
    }
    return null
}
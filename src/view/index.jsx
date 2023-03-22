/*
 * @Author: lxb
 * @Date: 2023-03-20 15:55:51
 * @LastEditors: lxb
 * @LastEditTime: 2023-03-21 16:54:19
 * @Description: 
 */
import './indexCss.css'
import { useState } from 'react';
import TicTacToe from './ticTacToe/TicTacToe';
import TestTicTacToc from './ticTacToe/TestTicTacToc'
import FilterProduct from './listTest/FilterProduct'
import TestFilterProduct  from './listTest/TestFilterProduct'


const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
export default function ViewIndex() {
    const [count, setCount] = useState(0);
    function handleClick() {
        // alert('You clicked me!');
        setCount(count + 1)
      }
    return (
      <div className="App">
        <TestFilterProduct></TestFilterProduct>
        <FilterProduct></FilterProduct>
        <TestTicTacToc></TestTicTacToc>
        {/* <TicTacToe></TicTacToe> */}
        {user.aa}
        <MyButton count={count} onClick={handleClick}></MyButton>
        <YouButton></YouButton>
        <Profile></Profile>
        <ListItems></ListItems>
        <MyButton count={count} onClick={handleClick}></MyButton>
        <YouButton></YouButton>
      </div>
    )
  }
export  function MyButton({ count, onClick }) {
    return (
        <div>
        <button onClick={onClick}>I'm a button{count}</button>
        </div>
    )
} 
export  function YouButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        // alert('You clicked me!');
        setCount(count + 1)
      }
    return (
        <div>
        <button onClick={handleClick}>I'm a button{count}</button>
        </div>
    )
} 
export function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  } 
export function ListItems() {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 ,isFruit:'1'},
    ];
    const listItems = products.map(product =>
        <li key={product.id} style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
            }}>
        {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}
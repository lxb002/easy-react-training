/*
 * @Author: lxb
 * @Date: 2023-03-21 16:48:02
 * @LastEditors: lxb
 * @LastEditTime: 2023-03-22 11:05:16
 * @Description: 
 */
import { useState } from "react";

function FilterProductTable({products}){
    const [filterText,setFilterText] = useState('');
    const [inStockOnly,setInStockOnly] = useState(false)
    return (
        <div>
            <SearchBar filterText={filterText} setFilterText={setFilterText} inStockOnly={inStockOnly} setInStockOnly={setInStockOnly}></SearchBar>
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}></ProductTable>
        </div>
    )
}

function SearchBar({filterText,inStockOnly,setFilterText,setInStockOnly}){
    return (
        <form>
            <input type="text" value={filterText} placeholder='请搜索...' onChange={(e)=>setFilterText(e.target.value)}/>
            <input type="checkbox" checked={inStockOnly} onChange={(e)=>setInStockOnly(e.target.checked)}/>
            只展示库存产品
        </form>
    )
}

function ProductTable({products,filterText,inStockOnly}){
    const row = [];
    let lastCategory = []
    products.map((item,index)=>{
        if(item.name.toLowerCase().indexOf(filterText.toLowerCase()) < 0){
            return
        }
        if(inStockOnly && !item.stocked){
            return
        }
        if(lastCategory.indexOf(item.category) < 0){
            lastCategory.push(item.category)
            row.push(<ProductCategoryRow tableName={item.category} key={index+'1'}></ProductCategoryRow>)
        }
        
            row.push(<ProductRow product={item} key={index+'2'}></ProductRow>)
            
        
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </table>
    )
}

function ProductRow({product}){
    const name = product.stocked ? product.name : <span style={{color:'red'}}>
        {product.name}
    </span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

function ProductCategoryRow({tableName}){
    return (
        <tr>
            <th>{tableName}</th>
        </tr>
    )
}

export default function TestFilterProduct(){
    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
      ];
    return <FilterProductTable products={PRODUCTS}></FilterProductTable>
}
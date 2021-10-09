import React from 'react'
import './productadd.css';
import { useState } from 'react';
import Axios from 'axios';

function Productadd() {

const [name,setName] = useState("");
const [price,setPrice] = useState(0);

const [productList,setproductList] = useState([]);
const [newList,setnewList] = useState([]);

const addProduct = () => {  //adding a new product
  Axios.post('http://localhost:3001/products', {
  
  name:name,
  price:price
}).then(() => { console.log("post request success")})
};

const showProducts = () => {  //display all products
  Axios.get('http://localhost:3001/products').then((response) => {
     setproductList(response.data)})
};

const editProduct = () => {  //update a product
  Axios.patch('http://localhost:3001/products/product.productId' ).then((request) => {
     console.log("updated")})
};

const deleteProduct = () => {  //delete a product
  Axios.delete('http://localhost:3001/products/:productId').then((response) => {
    setnewList(response.data)})
    // console.log("deleted")})
};

return(
  <div className="productadd">
    <div className="info">
      

      <label>Product Name : </label>
      <input type="text" 
      onChange={(event) =>{
        setName(event.target.value);
      } } />

      <label>Price : </label>
      <input type="number" 
      onChange={(event) =>{
        setPrice(event.target.value);
      } }  />   
      <div className="btn-group">
      <button onClick={addProduct} className="button">Add Product</button>

      <div>
     <button onClick={showProducts} className="button">View Products</button>

     {productList.map((val , key) => {   //printing out each product details
       return <div className="products">
         <h3>Product Name:{val.name}</h3>
         <h3>Price:{val.price}</h3>
         <div className="buttonset">
                <button onClick={editProduct} className="button">Edit</button>
                <div>
                <button onClick={deleteProduct} className="button">Delete</button>
                {newList.map((val , key) => {   //printing out each product details
                  return <div className="products">
                  <h3>Product Name:{val.name}</h3>
                  <h3>Price:{val.price}</h3>
         
         </div>;
     })}
     </div>
           </div>
         </div>;
     })}
     </div></div>

    </div>

  </div>
)


}

export default Productadd





















  //   const [items, setItems] = useState([]);
  // const [item, setItem] = useState("");
  // return (
  //   <div className="productadd">
      
  //     <div className="input">
  //       <input
  //         value={item}
  //         onChange={(e) => 
  //           setItem(e.target.value)
  //         }
  //         type="text"
  //         placeholder="🖊️ Add Item..."
  //       />

  //       <i
  //         onClick={() => 
  //           setItems([...items, { id:Date.now(), text:item, status: false }])}
  //         className="fas fa-plus"
  //       ></i>
        
  //     </div>
  //     <div className="items">
  //       {items.map((obj) => {
  //         return (
  //           <div className="item">
  //             <div className="left">
  //               <input
  //                 onChange={(e) => {
  //                   //  console.log(e.target.checked)
  //                   //  console.log(obj)
  //                   setItems(
  //                     items.filter((obj2) => {
  //                       if (obj2.id === obj.id) {
  //                         obj2.status = e.target.checked;
  //                       }
  //                       return obj2
  //                     })
  //                   )
  //                 }}
  //                 value={obj.status}
  //                 type="checkbox"
  //                 name=""
  //                 id=""
  //               />
  //               <p>{obj.text}</p>
  //             </div>
  //             <div className="right">
  //               <i
  //                 onClick={(e) => {
  //                   setItems(
  //                     items.filter((obj2) => {
  //                       return obj2.id !== obj.id;
  //                     })
  //                   );
  //                 }}
  //                 className="fas fa-times"
  //               ></i>
  //             </div>
  //           </div>
  //         );
  //       })}
  //       {items.map((obj) => {
  //         if (obj.status) {
  //           return <h1>{obj.text}</h1>;
  //         }
  //         return null;
  //       })}
  //     </div>
  //   </div>
  // );




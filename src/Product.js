import React from 'react'
import  { useState, useEffect } from 'react';


export const Product = () => {
    const [products, setProducts] = useState([]);
useEffect(() =>{
  const fetchproduct=async()=>{
    const res=await fetch('https://fakestoreapi.com/products');
    const data=await res.json();
    console.log(data);
    setProducts(data);

  }

  fetchproduct();

} ,[])
    return (
        <>
         {
            products.map((e) =>{
                return(
                <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={e.image} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">{e.title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>);
            })
        }
        </>
       
    
    );
}

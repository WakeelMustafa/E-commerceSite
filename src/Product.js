import React from 'react'
import { useState, useEffect } from 'react';
import { add } from './store/cartslice';
import { useDispatch } from 'react-redux';

export const Product = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchproduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);

        }

        fetchproduct();

    }, [])
    function handleAdd(e) {
        console.log('before dispatching product:', e);
        dispatch(add(e));
        alert("Added SuccesFully");

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-3">
                    {
                        products.map((e) => {
                            return (

                                <div className="col-3 mt-5" key={e.id}>

                                    <div className="card" >
                                        <img src={e.image} style={{ height: 377 }} />

                                        <h5 className="card-title">{e.title}</h5>
                                        <h5 className="card-title">{"Price:" + e.price}</h5>
                                        <button type="button" className="btn btn-primary" onClick={() => handleAdd(e)}>Add to Cart</button>
                                    </div>
                                </div>



                            );
                        })
                    }
                </div>
            </div>
        </>


    );
}

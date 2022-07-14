import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import '../App.css';

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);


  return (
    <div className='singleproduct'>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
    </div>
  )
}

export default ProductDetail;
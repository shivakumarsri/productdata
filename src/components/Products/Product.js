import React,{useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

const Product =()=>{
    const [product,setProduct]= useState({
        id:"",
        name:"",
        price:"",
        category:"",
        url:""
      
    });

    const {id}=useParams();
    useEffect(()=>{
        loadProduct();
    })

    const loadProduct=async()=>{
        const res=await axios.get(`http://localhost:3004/items/${ id }`);
        setProduct(res.data);
    };

    return(
        <div class="container py-5">
             <Link className="btn btn-secondary btn-sm" to="/home" >Back to Home</Link>
            <table class="table shadow mt-4 table-hover" >
                <thead class="table-success">
                    <tr>
                    <th colspan="2"  >Product Id: {id}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="text-center"> Name: </td>
                    <td> {product.name} </td>
                    </tr>

                    <tr>
                    <td class="text-center"> Price: </td>
                    <td> {product.price} </td>
                    </tr>

                    <tr>
                    <td class="text-center"> Category: </td>
                    <td> {product.category} </td>
                    </tr>

                    <tr>
                    <td class="text-center"> URL: </td>
                    <td> {product.url} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
              
              
}
export default Product;

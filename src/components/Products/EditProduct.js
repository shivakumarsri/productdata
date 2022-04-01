import React,{ useState,useEffect }  from 'react';
import axios from 'axios';
import {useNavigate,useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const EditProduct=()=>{
    let navigate=useNavigate;
    const {id}=useParams();
    const [product,setProduct]=useState({
        id:"",
        name:"",
        price:"",
        category:"",
        url:"",
    });

    const {name,price,category,url}=product;
    const onInputChange=e=>{
        console.log(e.target.value);
        setProduct({...product, [e.target.name]:e.target.value})
    };

    useEffect(()=>{
        loadProduct();
    },[]);

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3004/items/${id}`,product);
        navigate.push("/")
    };

    const loadProduct=async()=>{
        const result=await axios.get(`http://localhost:3004/items/${id}`);
        setProduct(result.data);
    };

    return(
        <div className="container">
            <Link className="btn btn-secondary btn-sm mt-4" to="/home" > Back to Home</Link>
            <form class="input-group  mb-3 p-5" onSubmit={e=>onSubmit(e)}>
                <table class="table shadow table-borderless" >
                    <thead>
                        <tr>
                        <th class="text-center  fs-5 fw-" colspan="2">Edit Prdouct Details</th>
                        </tr>
                    </thead>
                    <tbody>              
                        <tr>
                        <td class="text-center">Name</td>
                        <td> <input type="text" class="form-control" name="name" value={name} onChange={e=>onInputChange(e)} /> </td>
                        </tr>
                        <tr>
                        <td class="text-center">Price</td>
                        <td> <input type="text" class="form-control" name="price" value={price} onChange={e=>onInputChange(e)} /> </td>
                        </tr>
                        <tr>
                        <td class="text-center">Category</td>
                        <td> <input type="text" class="form-control" name="category" value={category} onChange={e=>onInputChange(e)} /> </td>
                        </tr>
                        <tr>
                        <td class="text-center">URL</td>
                        <td> <input type="url" class="form-control" name="url" value={url} onChange={e=>onInputChange(e)} /> </td>
                        </tr>
                    </tbody>
                </table>
                    <div class="d-grid gap-2 col-4 mx-auto">
                        <button class="btn btn-success">Update Product</button>
                    </div>           
            </form>
        </div>
    )
}
export default EditProduct;
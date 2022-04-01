import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

const AddProduct=()=>{
    let navigate=useNavigate;
    const [product,setProduct]=useState({
        id:"",
        name:"",
        price:"",
        category:"",
        url:""
      
    });

    const {id,name,price,category,url}=product;
    const onInputChange=e=>{
        console.log(e.target.value);
        setProduct({...product, [e.target.name]:e.target.value})
    }

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3004/items",product);
        navigate.push("/")
    }

    return(
        <div className="container">
            <Link className="btn btn-secondary btn-sm mt-4" to="/home" >Back to Home</Link>
            <form class="row g-3  mx-5 mt-4" onSubmit={e=>onSubmit(e)}>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Product Id</label>
                    <input type="text" class="form-control" name="id" value={id} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-md-6">
                    <label for="inputUsername" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" value={name} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-12">
                    <label for="inputEmail" class="form-label">Price</label>
                    <input type="text" class="form-control" name="price" value={price} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-12">
                    <label for="inputPhoneNo" class="form-label">Category</label>
                    <input type="text" class="form-control" name="category" value={category} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-12">
                    <label for="inputPhoneNo" class="form-label">URL</label>
                    <input type="url" class="form-control" name="url" value={url} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-12">
                    <button class="btn btn-success">Add Product</button>
                </div>
            </form>
        </div>
    )
}
export default AddProduct;
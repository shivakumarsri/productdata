import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

const Home=()=>{
    const [items,setItems]=useState([])
    useEffect(()=>{
        console.log("From Use Effect");
        loadItems();

    },[])

    const loadItems=async()=>{
        const result= await axios.get("http://localhost:3004/items");
        setItems(result.data.reverse()); 

    }


    const deleteItem=async id=>{
        await axios.delete(`http://localhost:3004/items/${id}`)
        loadItems();
    }

    return(
        <div className="container ">
            <div className="py-1">
                <h2 class="text-center fw-bold mt-2 text-info ">Products Table</h2>
                <table class="table shadow mt-3 text-center ">
                    <thead class="table-primary">
                        <tr>
                        <th scope="col">SNo.</th>
                        <th scope="col">Product Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">URL</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((product,index)=>(
                                <tr>
                                    <th scope="row"> {index+1} </th>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.url}</td>
                                    <td>
                                        <Link class="btn btn-success mx-2 btn-sm " to={`/items/${product.id}`} > View </Link>
                                        <Link class="btn btn-primary mx-2 btn-sm" to={`/items/edit/${product.id}`} > Edit </Link>
                                        <button class="btn btn-danger mx-2 btn-sm" onClick={()=> deleteItem(product.id)}> Delete </button>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div> 
    )
}
export default Home;

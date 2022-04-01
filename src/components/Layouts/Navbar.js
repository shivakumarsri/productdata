import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light fw-bolder bg-primary">
            <div class="container-fluid">
                <Link class="navbar-brand fs-3 text-light " to="/home">Products Data</Link>             
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto fs-5 mb-2 mb-lg-0 text-light">
                    <li class="nav-item">
                    <Link class="nav-link active mx-4 text-light" aria-current="page" to="/Home">Home</Link>
                    </li>  
                    <li class="nav-item">
                    <Link class="nav-link active mx-4 text-light" aria-current="page" to="/About">About</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active mx-4 text-light" aria-current="page" to="/Contact">Contact Us</Link>
                    </li>
                    </ul>
                </div>
                <Link className="btn btn-light" to="/items/add">Add Product</Link>
            </div>
        </nav>
    )
}
export default Navbar;

 /*                    
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        */
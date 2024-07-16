import React from 'react';
import '../components/Style.css';
//react-icons
import { FaRegUser } from "react-icons/fa";
import { PiBagSimple } from "react-icons/pi";

const Navbar = () => {
    return (
        // NAVBAR 
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="/Assets/logo.png" alt="" className="img"/> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#GiftStore">Gift Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Home&Decor">Home & Decor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Bags&Travel">Bags & Travel</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Watch">Watch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Collection">Collection</a>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                           
                           <button className='Nvbtn'><FaRegUser /></button>
                           <button className='Nvbtn'><PiBagSimple /></button>
                           

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

import React from 'react';
import { useSelector } from 'react-redux'; 
import { NavLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { PiBagSimple } from 'react-icons/pi';
import '../components/Style.css';

const Navbar = () => {
    
    const cart = useSelector((state) => state);
    const cartItemCount = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src="/Assets/logo.png" alt="Logo" className="img" />
                    </NavLink>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/products">Gift Store</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/products'>Home & Decor</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/products'>Bags & Travel</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/products'>Watch</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/products'>Collection</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            <NavLink to="/login">
                                <button className='Nvbtn'>
                                    <FaRegUser />
                                </button>
                            </NavLink>
                            <NavLink to="/cart">
                                <button className='Nvbtn'>
                                    <PiBagSimple />
                                    {cartItemCount > 0 && (
                                        <span className="badge bg-danger ms-2">{cartItemCount}</span>
                                    )}
                                </button>
                            </NavLink>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

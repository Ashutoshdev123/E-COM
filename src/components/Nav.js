import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo.png';

const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            
            { auth ? <ul className='nav-ul'>
                     {/* <li><img src={logo} alt="Logo" /></li> */}
                    <li><Link to="/">Products</Link> </li>
                    <li><Link to="/add">Add Product</Link> </li>
                    <li><Link to="/update">Update Product</Link> </li>
                    <li><Link to="/profile">Profile</Link> </li> 
                        <li style={{ float: "right" }}>
                            <Link
                                to="/login"  // Adjust path if needed
                                onClick={() => {
                                    logout();
                                }}
                            >
                             <b> Hi, {JSON.parse(auth).name} </b>   Logout
                            </Link>
                        </li>
                    </ul>
                    :
                    <ul className='nav-ul nav-right'>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link> </li>
                    </ul>   
        }

    </div>
    );
}

export default Nav;
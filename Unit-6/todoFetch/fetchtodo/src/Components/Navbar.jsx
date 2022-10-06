import React from "react";
import {Link} from "react-router-dom"
export const Navbar = () => {
    return (
      <div>
        <Link to ="/contact">Contact</Link>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/todo">Todo</Link>
        
      </div>
    );
};

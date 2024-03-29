import React from "react";

const Nav = ({props}) => {
	return (
<nav className="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.tituloNav}</a>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" href="#">{props.link1}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{props.link2}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{props.link3}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{props.link4}</a>
      </li>
    </ul>    
  </div>    
</nav>        
	);
};

export default Nav;
import React from "react";

const Jumbotron = ({props}) => {
	return (
  <div className="jumbotron">
    <h1 className="display-4">{props.tituloJumbotron}</h1>
    <p className="lead">{props.tema1}</p>   
    <p>{props.tema2}</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">{props.botonJumbotron}</a>
  </div>     
	);
};

export default Jumbotron;
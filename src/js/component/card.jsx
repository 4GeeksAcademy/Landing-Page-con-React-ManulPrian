import React from "react";

const Card = ({props}) => {
	return (
     <>
        {props.map((props, index) => (
          <div className="card my-5 border border-dark border-2 m-2" style={{width: "18rem"}} key={index}>
            <img src={props.imgenCard} className="mt-2" d-flex justify-content-center alt="..." style={{width:"120px", height:"120px"}}></img>
            <div className="card-body">
              <h5 className="card-title"><strong>{props.tituloCard}</strong></h5>
              <p className="card-text">{props.descripcionCard}</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">{props.botonCard}</a>
            </div>
          </div>                        
        ))}
     
     </>     
	);
};

export default Card;
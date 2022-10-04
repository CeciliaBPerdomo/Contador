import React from "react";

const SecondsCounter = (props) => {
    return (
        <div className="container text-center" style={{margin: "15px"}}>
            <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 ">
                
                <div className="p-3 border bg-light fs-1" style={{height: "100px"}}>
                    <i className="far fa-clock"></i>
                </div>
                
                <div className="col">
                    <div className="p-3 border bg-light fs-1" style={{height: "100px"}}>{props.loquesigue}</div>
                </div>

                <div className="col">
                    <div className="p-3 border bg-light fs-1" style={{height: "100px"}}>{props.miles}</div>
                </div>

                <div className="col">
                    <div className="p-3 border bg-light fs-1" style={{height: "100px"}}>{props.centenas}</div>
                </div>

                <div className="col">
                    <div className="p-3 border bg-light fs-1" style={{height: "100px"}}>{props.decimal}</div>
                </div>

                <div className="col">
                    <div className="p-3 border bg-light fs-1" style={{height: "100px"}}>{props.unidad}</div>
                </div>

            </div>
        </div>      
    )
}

export default SecondsCounter
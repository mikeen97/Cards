import React from "react";
import home from "../Img/smart-home.png";
import "../Styles/Table.css";

class Table extends React.Component {
  render() {
    const { numBodega, Description, Encargado, CantPasillos } = this.props;
    return (
      <div className="card mx-auto Fitness-Card">
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={home} className="float-right" alt=" not found" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <p># de Bodega: {numBodega}</p>
              <p>Descripcion: {Description}</p>
              <p>Encargado: {Encargado}</p>
              <p>Cantidad de Pasillos: {CantPasillos}</p>
            </div>
          </div>
        </div>
        <b>.</b>
      </div>
    );
  }
}

export default Table;

import React from "react";
import Table from "../componentes/Table";
import Bienvenida from "../componentes/Bienvenida";

class Bodegas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 2,
          bodega: "Bodega #2",
          encargado: "Isaias Mendez",
          description: "Esta es solo de repuestos de motocicleta",
        },
        {
          id: 3,
          bodega: "Bodega #3",
          encargado: "Jean Carlo Soto",
          description: "Esta es solo de repuestos de motocicleta",
        },
        {
          id: 4,
          bodega: "Bodega #4",
          encargado: "Jean Carlo Soto",
          description: "Esta es solo de repuestos de motocicleta",
        },
        {
          id: 4,
          bodega: "Bodega #4",
          encargado: "Jean Carlo Soto",
          description: "Esta es solo de repuestos de motocicleta",
        },
      ],
    };
  }

  /// Creacion de la funcion del boton

  handleClick() {
    console.log("Cliqueado");
  }

  render() {
    return (
      <div>
        <Bienvenida username="mikeen97" />
        {this.state.data.map((Bodegas) => {
          return (
            <div>
              <Table
                bodega={Bodegas.bodega}
                encargado={Bodegas.encargado}
                description={Bodegas.description}
              />
            </div>
          );
        })}
        <div className="">
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.handleClick}
          >
            Agregar nueva Bodega
          </button>
        </div>
      </div>
    );
  }
}

export default Bodegas;

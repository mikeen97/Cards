import React from "react";
import Formulario from "../componentes/Formulario";
import Table from "../componentes/Table";

class NewBodega extends React.Component {
  state = {
    form: { bodega: "", description: "", encargado: "", cantPasillos: "" },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm ">
          <Table {...this.state.form} />
        </div>
        <div className="col-sm">
          <Formulario onChange={this.handleChange} form={this.state.form} />
        </div>
      </div>
    );
  }
}

export default NewBodega;

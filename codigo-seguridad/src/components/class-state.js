import React from "react";
import { Loading } from "./loading";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
    this.state = { loading: false };
  }
  componentDidUpdate() {
    console.log("Actualizando...");
    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Validando...");
        this.setState({ loading: false });
        console.log("Finalizada la validacion");
      }, 2000);
    }    
  }
  render() {
    return (
      <div>
        <h1>Eliminar ClassState</h1>
        <p>Por favor, escribe el codigo de seguridad.</p>

        {this.state.error && <p>Error: Codigo incorrecto</p>}
        {this.state.loading && <p><Loading /></p>}

        <input type="text" placeholder="Codigo de Seguridad" />
        <button
          onClick={() =>
            this.setState((prevState) => ({ error: !prevState.error }))
          }
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };

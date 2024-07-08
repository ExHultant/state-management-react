import React from "react";
import { Loading } from "./loading";

const SECURITY_CODE = "paradigma";
class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: "",
    };
  }

  componentDidUpdate() {
    if (!!this.state.loading) {
      console.log("Actualizando...");
      setTimeout(() => {
        console.log("Validando...");
        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false});
        } else {
          this.setState({ error: true, loading: false });
        }
        console.log("Finalizada la validacion");
      }, 3000);
    }
  }
  render() {
    const { error, loading, value } = this.state;

    return (
      <div>
        <h1>Eliminar ClassState</h1>
        <p>Por favor, escribe el codigo de seguridad.</p>

        {(error && !loading) && <p>Error: Codigo incorrecto</p>}
        {loading && (
          <p>
            <Loading />
          </p>
        )}

        <input
          type="text"
          placeholder="Codigo de Seguridad"
          value={value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          onClick={() =>
            this.setState(() => this.setState({ loading: true}))
          }
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };

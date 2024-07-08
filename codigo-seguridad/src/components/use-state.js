import React from "react";

const SECURITY_CODE = "paradigma";

function UseState() {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  React.useEffect(() => {
    if (!!state.loading) {
      console.log("Empezando...");
      setTimeout(() => {
        console.log("Validando...");

        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }
        console.log("Finalizada la validacion");
        console.log("Terminado");
      }, 3000);
    }
  }, [state, state.loading, state.value]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h1>Eliminar UseState</h1>
        <p>Por favor, escribe el codigo de seguridad.</p>

        {state.error && !state.loading && <p>Error: Codigo incorrecto</p>}
        {state.loading && <p>Cargando...</p>}
        <input
          type="text"
          placeholder="Codigo de Seguridad"
          value={state.value}
          onChange={(event) => {
            setState({
              ...state,
              value: event.target.value,
              error: false,
            });
          }}
        />
        <button
          onClick={() => {
            setState({
              ...state,
              loading: true,
              error: false,
            });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <h1>¿Deseas Eliminar?</h1>
        <p>¿Estas Seguro que deseas eliminar el codigo de seguridad?</p>
        <button
          onClick={() =>
            setState({
              ...state,
              deleted: true,
            })
          }
        >
          Si, Eliminar
        </button>
        <button
          onClick={() =>
            setState({
              ...state,
              confirmed: false,
              value: "",
            })
          }
        >
          No, Cancelar
        </button>
      </>
    );
  } else {
    return (
      <>
        <h1>Eliminado</h1>
        <p>¡El componente ha sido eliminado con exito!</p>
        <button
          onClick={() =>
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: "",
            })
          }
        >
          Volver atras
        </button>
      </>
    );
  }
}

export { UseState };

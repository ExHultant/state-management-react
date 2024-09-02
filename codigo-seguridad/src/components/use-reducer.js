import React from "react";

const SECURITY_CODE = "paradigma";

function UseReducer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    if (!!state.loading) {
      console.log("Empezando...");
      setTimeout(() => {
        console.log("Validando...");

        if (state.value === SECURITY_CODE) {
         dispatch({ type: "CONFIRM" });
        } else {
          dispatch({ type: "ERROR" });
        }
        console.log("Finalizada la validacion");
        console.log("Terminado");
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h1>Eliminar UseReducer</h1>
        <p>Por favor, escribe el codigo de seguridad.</p>

        {state.error && !state.loading && <p>Error: Codigo incorrecto</p>}
        {state.loading && <p>Cargando...</p>}

        <input
          type="text"
          placeholder="Codigo de Seguridad"
          value={state.value}
          onChange={(event) => {
            dispatch({ type: "WRITE", payload: event.target.value });
            // onWrite(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "CHECK" });
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
        <button onClick={() => dispatch({type: "DELETE"})}>Si, Eliminar</button>
        <button onClick={() => dispatch({type: "RESET"})}>No, Cancelar</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Eliminado</h1>
        <p>¡El componente ha sido eliminado con exito!</p>
        <button onClick={() => dispatch({type: "RESET"})}>Volver atras</button>
      </>
    );
  }
}

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const reducerObject = (state, payload) => ({
  CONFIRM: { ...state, confirmed: true, error: false, loading: false },
  ERROR: { ...state, error: true, loading: false },
  WRITE: { ...state, value: payload },
  CHECK: { ...state, loading: true, error: false },
  DELETE: { ...state, deleted: true },
  RESET: { ...initialState },
});

const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };


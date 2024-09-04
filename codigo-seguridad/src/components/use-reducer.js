import React from "react";

const SECURITY_CODE = "paradigma";

function UseReducer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onConfirm = () => dispatch({ type: actionTypes.confirm });
  const onError = () => dispatch({ type: actionTypes.error });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onReset = () => dispatch({ type: actionTypes.reset });
  const onDelete = () => dispatch({ type: actionTypes.delete });
  
  const onWrite = ({ target: { value } }) => {
    dispatch({ type: actionTypes.write, payload: value });
  };

  React.useEffect(() => {
    if (!!state.loading) {
      console.log("Empezando...");
      setTimeout(() => {
        console.log("Validando...");

        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
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
          onChange={onWrite}
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <h1>¿Deseas Eliminar?</h1>
        <p>¿Estas Seguro que deseas eliminar el codigo de seguridad?</p>
        <button onClick={onDelete}>Si, Eliminar</button>
        <button onClick={onReset}>No, Cancelar</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Eliminado</h1>
        <p>¡El componente ha sido eliminado con exito!</p>
        <button onClick={onReset}>Volver atras</button>
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

const actionTypes = {
  confirm: "CONFIRM",
  error: "ERROR",
  write: "WRITE",
  check: "CHECK",
  delete: "DELETE",
  reset: "RESET",
};

const reducerObject = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    confirmed: true,
    error: false,
    loading: false,
  },
  [actionTypes.error]: { ...state, error: true, loading: false },
  [actionTypes.write]: { ...state, value: payload },
  [actionTypes.check]: { ...state, loading: true, error: false },
  [actionTypes.delete]: { ...state, deleted: true },
  [actionTypes.reset]: { ...initialState },
});

const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };

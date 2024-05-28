import React from "react";

function UseState() {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando...");
    if (!!loading) {
      setLoading(true);
      setTimeout(() => {
        console.log("Validando...");
        setLoading(false);
        console.log("Finalizada la validacion");
      }, 2000);
    }
    console.log("Terminado");
  }, [loading]);

  return (
    <div>
      <h1>Eliminar UseState</h1>
      <p>Por favor, escribe el codigo de seguridad.</p>

      {error && <p>Error: Codigo incorrecto</p>}
      {loading && <p>Cargando...</p>}
      <input type="text" placeholder="Codigo de Seguridad" />
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
}

export { UseState };

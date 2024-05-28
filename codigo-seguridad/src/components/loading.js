import React from "react";

class Loading extends React.Component {
    componentWillUnmount() {
    console.log("Desmontando...");
    }

  render() {
    return (
      <div>
        <p>Cargando...</p>
      </div>
    );
  }
}

export { Loading };

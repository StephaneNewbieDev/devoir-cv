import React, { useState } from "react";

const Counter = () => {
  // Déclarez un état local pour le compteur
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Compteur simple</h2>
      <p>
        Vous avez cliqué <strong>{count}</strong> fois.
      </p>
      <button onClick={increment} className="btn btn-primary">
        Cliquez-moi !
      </button>
      <button onClick={reset} className="btn btn-secondary mx-2">
        Réinitialiser
      </button>
    </div>
  );
};

export default Counter;

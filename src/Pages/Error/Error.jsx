import React from "react";

import "./Error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
  return (
    <main className="PaginaError">
      <div className="ContainerError">
        <h1 className="CodigoError">
          404
        </h1>

        <h2 className="TituloError">
          Pagina no encontrada
        </h2>

        <p className="TextoError">
          La página que estás buscando
          no existe en este universo.
        </p>

        <img
          className="ErrorImage"
          src="/19.png"
          alt="Rick and Morty Error"
        />

        <button
          className="BotonError"
          onClick={() =>
            navigate("/")
          }
        >
          Intentar de nuevo
        </button>
      </div>
    </main>
  );
};

export default Error;

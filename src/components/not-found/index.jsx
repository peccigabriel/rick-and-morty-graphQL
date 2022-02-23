import React from "react";
import Image404 from "../../assets/images/404.png";

export const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src={Image404}
        alt="Imagem de uma página Not Found animada com Rick and Morty"
      />
    </div>
  );
};

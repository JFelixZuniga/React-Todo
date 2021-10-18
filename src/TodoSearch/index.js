import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    // Cada vez que se realice una búsqueda por el usuario, se llamará a función onSearchValiueChange la que ejecutará la función setSearchValue para actualizar el searchValue (el estado)
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar tarea"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };

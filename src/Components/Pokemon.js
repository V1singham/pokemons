import React from 'react';

function Pokemon({ pokemon, Details, open }) {
  return (
    <div>
      {pokemon.map(({ name, url }) => (
        <a>
          <div onClick={open} className=" " key={name} className="pokemon">
            <p className="list-group-item" onClick={() => Details(url)}>
              {name}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Pokemon;

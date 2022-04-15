import React from 'react';

function Pokemon({ pokemon, Details, open }) {
  return (
    <div className="">
      {pokemon.map(({ name, url }) => (
        <div onClick={open} className=" " key={name}>
          <p className="list-group-item" onClick={() => Details(url)}>
            {name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;

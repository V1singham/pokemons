import React from 'react';
import '../App.css';

function PokemonDetails({ Details, close, isopen }) {
  if (Details) {
    let colorr = 'white';
    let color2 = 'white';
    return (
      <div id="main" className={isopen ? '' : 'hidden'}>
        <div id="ccc">
          {Details.types[0].type.name === 'fire'
            ? (colorr = 'red')
            : Details.types[0].type.name === 'grass'
            ? (colorr = 'green')
            : Details.types[0].type.name === 'water'
            ? ((colorr = 'AliceBlue'), (color2 = 'black'))
            : Details.types[0].type.name === 'poison'
            ? (colorr = 'purple')
            : Details.types[0].type.name === 'fairy'
            ? (colorr = 'pink')
            : Details.types[0].type.name === 'electric'
            ? ((colorr = 'yellow'), (color2 = 'black'))
            : Details.types[0].type.name === 'bug'
            ? (colorr = 'dark green')
            : Details.types[0].type.name === 'rock'
            ? (colorr = 'dark gray')
            : (colorr = 'blue')}
        </div>

        <div
          className="card"
          id="detail"
          style={{ backgroundColor: `${colorr}`, color: `${color2}` }}
        >
          <div>
            <p className="title">{Details.name.toUpperCase()}</p>
            <div className="content">
              <img src={Details.sprites.back_default} alt={Details.name} />
              <p className="">height:{Details.height}</p>

              <p className="">weight: {Details.weight}</p>
              <p className="">height: {Details.height}</p>
              <p className="">species: {Details.species.name}</p>
              <p className="">Type : {Details.types[0].type.name}</p>
              <div>
                <p className="">Exp : {Details.base_experience}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card "
          id="move"
          style={{ backgroundColor: `${colorr}`, color: `${color2}` }}
        >
          <p className="title">Moves</p>
          <div className="content">
            {Details.moves.map(({ move: { name } }) => (
              <p className="">{name}</p>
            ))}
          </div>
        </div>
        <div
          className="card "
          id="stats"
          style={{ backgroundColor: `${colorr}`, color: `${color2}` }}
        >
          <p className="title">Stats</p>
          <div className="content">
            {Details.stats.map(({ base_stat, stat: { name } }) => (
              <p className="">
                {name}:{base_stat}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default PokemonDetails;

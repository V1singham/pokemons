import React, { useState, useEffect } from 'react';
import { fetchApi, fetchDetails, cancel } from './Api';
import Pokemon from './Components/Pokemon';
import PokemonDetails from './Components/PokemonDetails';
import './App.css';
import ReactPaginate from 'react-paginate';

function App() {
  let [pokemons, setpokemons] = useState([]);
  const [nexturl, setnexturl] = useState('');
  const [prevurl, setprevurl] = useState('');
  const [text, setText] = useState('');
  const [url, seturl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=1126'
  );
  const [Pokedetails, setPokedetails] = useState();
  const [isopen, setisopen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetchApi(url);
      setpokemons(res.results);
      setIsloading(false);
      setprevurl(res.previous);
      setnexturl(res.next);
    };
    fetchPokemon();
    return () => {
      cancel();
    };
  }, [url]);

  const open = () => {
    setisopen(true);
  };

  const close = () => {
    setisopen(false);
  };

  const NextPage = () => {
    seturl(nexturl);
  };
  const Previouspage = () => {
    seturl(prevurl);
  };

  const PokeDetails = async (url1) => {
    const res = await fetchDetails(url1);
    setPokedetails(res);
  };

  // console.log(Pokedetails);
  const handler = (e) => {
    setText(e.target.value);
  };

  pokemons = pokemons.filter(({ name }) => {
    if (text === '') return name;
    else {
      if (name.toLowerCase().includes(text.toLocaleLowerCase())) {
        return name;
      }
    }
  });

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pokemons.length / usersPerPage);
  const displayUsers = pokemons.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="nav navbar-light bg-light">
          <input
            id="inp"
            type="text"
            onChange={handler}
            placeholder="Search Pokemon"
          />
        </div>
        {isloading && pokemons.length === 0 && <p>Loading....</p>}
        <div className="card-body">
          <Pokemon pokemon={displayUsers} Details={PokeDetails} open={open} />
        </div>
      </div>

      <PokemonDetails Details={Pokedetails} close={close} isopen={isopen} />
      <div id="page">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>

      <div id="footer">
        <p>Developed by Vikash kumar singh</p>
      </div>
    </div>
  );
}

export default App;

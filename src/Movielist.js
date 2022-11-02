import React, {useState, useEffect} from 'react';

import Pelicula from './components/Pelicula/Pelicula';

import peliculasJson from './Json/movies.json'
import Pagination from './components/Pagination/Pagination';
import PageColLeft from './components/PageColLeft/PageColLeft';
import Topbar from './components/Topbar/Topbar';


function Movielist() {
	
	const [paginaActual, setPaginaActual] = useState(1);
	let peliculas = peliculasJson;
	const pagePerPage = 4;

	peliculas = peliculas.slice(
		(paginaActual - 1) * pagePerPage,
		paginaActual *pagePerPage
	);

	const getPagesTotal = () => {
		let moviesTotal = peliculasJson.length;
		return Math.ceil(moviesTotal / pagePerPage);
	};

  return (
      <PageColLeft>

          <Topbar />

          {peliculas.map(pelicula =>
              <Pelicula name={pelicula.name} age={pelicula.age} punctuation={pelicula.punctuation} director={pelicula.director} director2={pelicula.director2} star1={pelicula.star1} star2={pelicula.star2} star3={pelicula.star3} date={pelicula.date} runtime={pelicula.runtime} protection={pelicula.protection} image={pelicula.image}>
                  {pelicula.description}
              </Pelicula>
          )}

          <Pagination actual={paginaActual} total={getPagesTotal()} onChange={(page) => {
              setPaginaActual(page)
          }} />

      </PageColLeft>
  );
}

export default Movielist;
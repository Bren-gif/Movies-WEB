import React from 'react'

const Topbar = () => {
  return (
      <div className="topbar-filter">
          <p>Fundar <span>1,608 películas</span> en total</p>
          <label>Ordenar por:</label>
          <select>
              <option value="popularity">Popularidad descendiendo</option>
              <option value="popularity">Popularidad ascendente</option>
              <option value="rating">Calificación descendente</option>
              <option value="rating">Calificación ascendente</option>
              <option value="date">Fecha de lanzamiento descendente</option>
              <option value="date">Fecha de lanzamiento ascendente</option>
          </select>
          <a href="movielist.html" className="list"><i className="ion-ios-list-outline active"></i></a>
          <a href="moviegrid.html" className="grid"><i className="ion-grid"></i></a>
      </div>
  )
}

export default Topbar
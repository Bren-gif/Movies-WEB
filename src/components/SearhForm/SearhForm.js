import React from 'react'

const SearhForm = () => {
  return (
    <div className="searh-form">
      <h4 className="sb-title">Buscar películas</h4>
      <form className="form-style-1" action="#">
        <div className="row">
          <div className="col-md-12 form-it">
            <label>Nombre de película</label>
            <input type="text" placeholder="Enter keywords" />
          </div>
          <div className="col-md-12 form-it">
            <label>Géneros & Subgéneros</label>
            <div className="group-ip">
              <select
                name="skills" multiple="" className="ui fluid dropdown">
                <option value="">Entrar para filtrar géneros</option>
                <option value="Action1">Acción 1</option>
                <option value="Action2">Acción 2</option>
                <option value="Action3">Acción 3</option>
                <option value="Action4">Acción 4</option>
                <option value="Action5">Acción 5</option>
              </select>
            </div>

          </div>
          <div className="col-md-12 form-it">
            <label>Rango de calificación</label>

            <select>
              <option value="range">-- Seleccione el rango de calificación a continuación --</option>
              <option value="saab">-- Seleccione el rango de calificación a continuación--</option>
              <option value="saab">-- Seleccione el rango de calificación a continuación--</option>
              <option value="saab">-- Seleccione el rango de calificación a continuación --</option>
            </select>

          </div>
          <div className="col-md-12 form-it">
            <label>Año de lanzamiento</label>
            <div className="row">
              <div className="col-md-6">
                <select>
                  <option value="range">De</option>
                  <option value="number">10</option>
                  <option value="number">20</option>
                  <option value="number">30</option>
                </select>
              </div>
              <div className="col-md-6">
                <select>
                  <option value="range">A</option>
                  <option value="number">20</option>
                  <option value="number">30</option>
                  <option value="number">40</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-12 ">
            <input className="submit" type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearhForm
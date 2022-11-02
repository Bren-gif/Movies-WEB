import React from 'react'

const Pagination = (props) => {

  const getPaginas = () =>{
    const result = [];
    for (let i = 0; i < props.total; i++) {
      let page = i+1;
      result.push(<a onClick={() => props.onChange(page)} className={ props.actual === (page) ? "active" : ""}>{(page)}</a>)            
    }
    return result;
  }

  return (
      <div className="topbar-filter">
          <label>Movies per page:</label>
          <div className="pagination2">
              <span>Page {props.actual} of {props.total}:</span>
              
              {getPaginas()}

              <a href="#"><i className="ion-arrow-right-b"></i></a>
          </div>
      </div>
  )
}

export default Pagination
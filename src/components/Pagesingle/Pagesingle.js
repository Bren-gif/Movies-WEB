import React from 'react'

const Pagesingle = (props) => {

    

  return (
      <div className="page-single movie_list">
          <div className="container">
              <div className="row ipad-width2">

                  {props.children}
                  
              </div>
          </div>
      </div>
  )
}

export default Pagesingle
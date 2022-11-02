import React from 'react'

const PageColRight = (props) => {
  return (
    <div className="col-md-4 col-sm-12 col-xs-12">
      <div className="sidebar">

        {props.children}

      </div>
    </div>
  )
}

export default PageColRight
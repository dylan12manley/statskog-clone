import React from 'react';
import PropTypes from 'prop-types';


function Season(props){
  return(
    <div className="season">
    <p>{props.name}</p>
    <p>{props.year}</p>
    </div>
  )
}

Season.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default Season;

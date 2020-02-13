import React from 'react';
import PropTypes from 'prop-types';


function Season(props){
  return(
    <div className="season">
    <p className="seasonName">{props.name}</p>
    <p className="seasonYear">{props.year}</p>
    </div>
  )
}

Season.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default Season;

import React from 'react';
import Season from './Season';

const seasonList = [
  {
    name: "Fall",
    year: "2019"
  },
  {
    name: "Spring",
    year: "2019"
  },
  {
    name: "Fall",
    year: "2018"
  },
  {
    name: "Spring",
    year: "2018"
  },
  {
    name: "Fall",
    year: "2017"
  },
  {
    name: "Spring",
    year: "2017"
  }
]

function Seasons(){
  return (
    <>
    <div className="seasons">
    <h1>All</h1>
    { seasonList.map((season, index) =>
      <Season
        name={season.name}
        year={season.year}
        key={index}/>
    )}
    </div>

    </>
  );
}

export default Seasons;

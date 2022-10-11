import React from 'react';

const ShowHeaderData = ({data}) => {
    const {name,logo} = data
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body flex">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions ">
            <button className="btn btn-primary">Start Quiz</button>
          </div>
        </div>
      </div>
    );
};

export default ShowHeaderData;